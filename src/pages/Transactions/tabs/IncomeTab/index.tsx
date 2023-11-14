import { ActivityIndicator, FlatList } from "react-native";
import { BalanceInfo } from "../components/BalanceInfo";
import * as S from "./styles";
import { Transaction } from "../../../../components/Transaction";
import { useNavigation } from "@react-navigation/native";
import { useGetIncomeOrExpense } from "../../../../hooks/useGetIncomeOrExpense";
import { useAuthContext } from "../../../../context/AuthContext";
import { useTransactionContext } from "../../context";
import { useState, useEffect } from "react";
import { TransactionsData } from "../../../../hooks/types";
import { useGetIncomeAndExpense } from "../../../../hooks/useGetIncomeAndExpense";
import { Empty } from "../../components/Empty";
import { useDeleteTransaction } from "../../../../hooks/useDeleteTransaction";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthenticatedStackParamList } from "../../../../routes/Authenticated/screens/type";

export function IncomeTab() {
  const { session } = useAuthContext();
  const { date, updateList, setUpdateList } = useTransactionContext();
  const [incomes, setIncomes] = useState<TransactionsData[] | undefined>();
  const [valueIncomes, setValueIncomes] = useState(0);
  const [loading, setLoading] = useState(true);

  const navigation =
    useNavigation<
      StackNavigationProp<AuthenticatedStackParamList, "TransactionsRoutes">
    >();

  async function getIncomes() {
    const incomesData = await useGetIncomeOrExpense({
      month: date.getMonth() + 1,
      userId: session?.user.id,
      year: date.getFullYear(),
      transactiontype: "income",
    });
    setIncomes(incomesData);
  }

  async function calculateMonthIncomes() {
    const values = await useGetIncomeAndExpense({
      month: date.getMonth() + 1,
      userId: session?.user.id,
      year: date.getFullYear(),
    });

    const incomes = values?.income || 0;
    setValueIncomes(incomes);
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
      await calculateMonthIncomes();
      await getIncomes();
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
            value={String(valueIncomes)}
            loading={loading}
          />
        </S.Header>
        {loading && (
          <S.LoadingContainer>
            <ActivityIndicator />
          </S.LoadingContainer>
        )}
        {!loading && !incomes && <Empty />}
        {incomes && incomes.length > 0 && (
          <FlatList
            data={incomes}
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
