import { ActivityIndicator, FlatList } from "react-native";
import { BalanceInfo } from "../components/BalanceInfo";
import * as S from "./styles";
import { Transaction } from "../../../../components/Transaction";
import { useAuthContext } from "../../../../context/AuthContext";
import { useTransactionContext } from "../../context";
import { useState, useEffect } from "react";
import { TransactionsData } from "../../../../hooks/types";
import { useGetIncomeOrExpense } from "../../../../hooks/useGetIncomeOrExpense";
import { useNavigation } from "@react-navigation/native";
import { useGetIncomeAndExpense } from "../../../../hooks/useGetIncomeAndExpense";
import { Empty } from "../../components/Empty";
import { useDeleteTransaction } from "../../../../hooks/useDeleteTransaction";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthenticatedStackParamList } from "../../../../routes/Authenticated/screens/type";

export function ExpensesTab() {
  const { session } = useAuthContext();
  const { date, updateList, setUpdateList } = useTransactionContext();
  const [expenses, setExpenses] = useState<TransactionsData[] | undefined>();
  const [valueExpenses, setValueExpenses] = useState(0);
  const [loading, setLoading] = useState(true);

  const navigation =
    useNavigation<
      StackNavigationProp<AuthenticatedStackParamList, "TransactionsRoutes">
    >();

  async function getExpenses() {
    const expensesData = await useGetIncomeOrExpense({
      month: date.getMonth() + 1,
      userId: session?.user.id,
      year: date.getFullYear(),
      transactiontype: "expense",
    });

    setExpenses(expensesData);
  }

  async function calculateMonthExpenses() {
    const values = await useGetIncomeAndExpense({
      month: date.getMonth() + 1,
      userId: session?.user.id,
      year: date.getFullYear(),
    });

    const expenses = values?.expense || 0;

    setValueExpenses(expenses);
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
    async function fetch() {
      await calculateMonthExpenses();
      await getExpenses();
      setUpdateList(false);
      setLoading(false);
    }

    setLoading(true);
    fetch();
  }, [date, updateList]);

  return (
    <S.GeralContainer>
      <S.Content>
        <S.Header>
          <BalanceInfo
            name="Valor total: "
            value={String(valueExpenses)}
            transactionType="expense"
          />
        </S.Header>
        {loading && (
          <S.LoadingContainer>
            <ActivityIndicator />
          </S.LoadingContainer>
        )}
        {!loading && !expenses && <Empty />}
        {expenses && expenses.length > 0 && (
          <FlatList
            data={expenses}
            keyExtractor={(item) => `${item.id}`}
            renderItem={({ item }) => (
              <Transaction
                id={item.id}
                category={item.category}
                created_at={item.created_at}
                name={item.name}
                paymentType={item.paymentType}
                value={item.value}
                transactionType={item.transactionType}
                handeClickEdit={handleClickEdit}
                handleClickDelete={handleClickDelete}
              />
            )}
          />
        )}
      </S.Content>
    </S.GeralContainer>
  );
}
