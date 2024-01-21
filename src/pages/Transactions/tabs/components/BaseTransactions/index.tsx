import { useEffect, useState } from "react";

import * as S from "./styles";
import { ActivityIndicator, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthenticatedStackParamList } from "../../../../../routes/Authenticated/screens/type";
import { useDeleteTransaction } from "../../../../../hooks/useDeleteTransaction";
import { Empty } from "../../../components/Empty";
import { TransactionsData } from "../../../../../hooks/types";
import { useGetIncomeAndExpense } from "../../../../../hooks/useGetIncomeAndExpense";
import { useGetBalance } from "../../../../../hooks/useGetBalance";
import { Transaction } from "../../../../../components/Transaction";
import { useTransactionContext } from "../../../context";
import { useGetTransactions } from "../../../../../hooks/useGetTransactions";
import { useAuthContext } from "../../../../../context/AuthContext";
import { BalanceInfo } from "../BalanceInfo";

export function TransactionTab() {
  const { session } = useAuthContext();
  const { date, updateList, setUpdateList } = useTransactionContext();
  const [balance, setBalance] = useState<string | undefined>("");
  const [loading, setLoading] = useState(true);
  const [transactions, setTransactions] = useState<
    TransactionsData[] | undefined
  >();
  const [monthBalance, setMonthBalance] = useState<number>(0);

  const navigation =
    useNavigation<
      StackNavigationProp<AuthenticatedStackParamList, "TransactionsRoutes">
    >();

  async function getTransactions() {
    const transactionsData = await useGetTransactions({
      month: date.getMonth() + 1,
      userId: session?.user.id,
      year: date.getFullYear(),
    });

    setTransactions(transactionsData);
  }

  async function getCurrentBalance() {
    if (session?.user.id) {
      const balanceData = await useGetBalance(session.user.id);
      setBalance(balanceData?.balance);
    }
  }

  async function calculateMonthBalance() {
    const values = await useGetIncomeAndExpense({
      month: date.getMonth() + 1,
      userId: session?.user.id,
      year: date.getFullYear(),
    });

    const incomes = values?.income || 0;
    const expenses = values?.expense || 0;

    const calculateBalance = incomes - expenses;

    setMonthBalance(calculateBalance);
  }

  async function handleClickDelete(id: number, transactionType: string) {
    await useDeleteTransaction(id, transactionType, session?.user.id);
    setUpdateList(true);
  }

  async function handleClickEdit(id: number) {
    navigation.navigate("AddTransaction", {
      id,
    });
  }

  useEffect(() => {
    async function fetchData() {
      await getCurrentBalance();
      await getTransactions();
      await calculateMonthBalance();
      setUpdateList(false);
      setLoading(false);
    }
    setLoading(true);
    fetchData();
  }, [date, updateList]);

  return (
    <S.GeralContainer>
      <S.Content>
        <S.Header>
          <BalanceInfo name="Saldo Atual: " value={balance} loading={loading} />
          <BalanceInfo
            name="Balanço Mensal: "
            value={String(monthBalance)}
            loading={loading}
          />
        </S.Header>
        {loading && !transactions && (
          <S.LoadingContainer>
            <ActivityIndicator />
          </S.LoadingContainer>
        )}
        {!loading && !transactions && <Empty />}
        {transactions && transactions.length > 0 && (
          <FlatList
            data={transactions}
            keyExtractor={(item) => `${item.id}`}
            renderItem={({ item }) => (
              <Transaction
                category={item.category}
                id={item.id}
                created_at={item.created_at}
                name={item.name}
                paymentType={item.paymentType}
                value={item.value}
                transactionType={item.transactionType}
                handleClickDelete={handleClickDelete}
                handeClickEdit={handleClickEdit}
              />
            )}
          />
        )}
      </S.Content>
    </S.GeralContainer>
  );
}
