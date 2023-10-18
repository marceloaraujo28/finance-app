import { FlatList } from "react-native";
import { BalanceInfo } from "../components/BalanceInfo";
import * as S from "./styles";
import { Transaction } from "../../../../components/Transaction";
import { useFocusEffect } from "@react-navigation/native";
import { useGetIncomeOrExpense } from "../../../../hooks/useGetIncomeOrExpense";
import { useAuthContext } from "../../../../context/AuthContext";
import { useTransactionContext } from "../../context";
import { useState } from "react";
import { TransactionsData } from "../../../../hooks/types";
import { useGetIncomeAndExpense } from "../../../../hooks/useGetIncomeAndExpense";
import { Empty } from "../../components/Empty";

export function IncomeTab() {
  const { session } = useAuthContext();
  const { date } = useTransactionContext();
  const [incomes, setIncomes] = useState<TransactionsData[] | undefined>();
  const [valueIncomes, setValueIncomes] = useState(0);

  async function getIncomes() {
    const incomesData = await useGetIncomeOrExpense({
      month: date.getMonth() + 1,
      userId: session?.user.id,
      year: date.getFullYear(),
      transactiontype: "income",
    });
    if (JSON.stringify(incomes) !== JSON.stringify(incomesData)) {
      setIncomes(incomesData);
    }
  }

  async function calculateMonthIncomes() {
    const values = await useGetIncomeAndExpense({
      month: date.getMonth() + 1,
      userId: session?.user.id,
      year: date.getFullYear(),
    });

    const incomes = values?.income || 0;

    if (valueIncomes !== incomes) {
      setValueIncomes(incomes);
    }
  }

  useFocusEffect(() => {
    calculateMonthIncomes();
    getIncomes();
  });

  return (
    <S.GeralContainer>
      <S.Content>
        <S.Header>
          <BalanceInfo name="Valor total: " value={String(valueIncomes)} />
        </S.Header>
        {incomes && incomes.length > 0 ? (
          <FlatList
            data={incomes}
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
