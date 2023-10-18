import { FlatList } from "react-native";
import { BalanceInfo } from "../components/BalanceInfo";
import * as S from "./styles";
import { Transaction } from "../../../../components/Transaction";
import { useAuthContext } from "../../../../context/AuthContext";
import { useTransactionContext } from "../../context";
import { useState } from "react";
import { TransactionsData } from "../../../../hooks/types";
import { useGetIncomeOrExpense } from "../../../../hooks/useGetIncomeOrExpense";
import { useFocusEffect } from "@react-navigation/native";
import { useGetIncomeAndExpense } from "../../../../hooks/useGetIncomeAndExpense";
import { Empty } from "../../components/Empty";

export function ExpensesTab() {
  const { session } = useAuthContext();
  const { date } = useTransactionContext();
  const [expenses, setExpenses] = useState<TransactionsData[] | undefined>();
  const [valueExpenses, setValueExpenses] = useState(0);

  async function getExpenses() {
    const expensesData = await useGetIncomeOrExpense({
      month: date.getMonth() + 1,
      userId: session?.user.id,
      year: date.getFullYear(),
      transactiontype: "expense",
    });
    if (JSON.stringify(expenses) !== JSON.stringify(expensesData)) {
      setExpenses(expensesData);
    }
  }

  async function calculateMonthExpenses() {
    const values = await useGetIncomeAndExpense({
      month: date.getMonth() + 1,
      userId: session?.user.id,
      year: date.getFullYear(),
    });

    const expenses = values?.expense || 0;

    if (valueExpenses !== expenses) {
      setValueExpenses(expenses);
    }
  }

  useFocusEffect(() => {
    calculateMonthExpenses();
    getExpenses();
  });

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
        {expenses && expenses.length > 0 ? (
          <FlatList
            data={expenses}
            keyExtractor={(item) => `${item.id}`}
            renderItem={({ item }) => (
              <Transaction
                category={item.category}
                created_at={item.created_at}
                name={item.name}
                paymentType={item.paymentType}
                value={item.value}
                transactionType={item.transactionType}
              />
            )}
          />
        ) : (
          <Empty />
        )}
      </S.Content>
    </S.GeralContainer>
  );
}
