import { useEffect, useState } from "react";
import { BalanceInfo } from "../components/BalanceInfo";
import * as S from "./styles";
import { useAuthContext } from "../../../../context/AuthContext";
import { useGetTransactions } from "../../../../hooks/useGetTransactions";
import { useTransactionContext } from "../../context";
import { FlatList } from "react-native";
import { Transaction } from "../../../../components/Transaction";
import { useFocusEffect } from "@react-navigation/native";
import { useGetBalance } from "../../../../hooks/useGetBalance";
import { useGetIncomeAndExpense } from "../../../../hooks/useGetIncomeAndExpense";
import { TransactionsData } from "../../../../hooks/types";
import { EmailInput } from "../../../../routes/Unauthenticated/Pages/Login/styles";
import { Empty } from "../../components/Empty";

export function TransactionTab() {
  const { session } = useAuthContext();
  const { date } = useTransactionContext();
  const [balance, setBalance] = useState<string | undefined>("");
  const [transactions, setTransactions] = useState<
    TransactionsData[] | undefined
  >();
  const [monthBalance, setMonthBalance] = useState<number>(0);

  async function getTransactions() {
    const transactionsData = await useGetTransactions({
      month: date.getMonth() + 1,
      userId: session?.user.id,
      year: date.getFullYear(),
    });
    if (JSON.stringify(transactions) !== JSON.stringify(transactionsData)) {
      setTransactions(transactionsData);
    }
  }

  async function getCurrentBalance() {
    if (session?.user.id) {
      const balanceData = await useGetBalance(session.user.id);
      if (balance !== balanceData?.balance) {
        setBalance(balanceData?.balance);
      }
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

    if (monthBalance !== calculateBalance) {
      setMonthBalance(calculateBalance);
    }
  }

  useFocusEffect(() => {
    getCurrentBalance();
    getTransactions();
    calculateMonthBalance();
  });

  return (
    <S.GeralContainer>
      <S.Content>
        <S.Header>
          <BalanceInfo name="Saldo Atual: " value={balance} />
          <BalanceInfo name="Balanço Mensal: " value={String(monthBalance)} />
        </S.Header>
        {transactions && transactions.length > 0 ? (
          <FlatList
            data={transactions}
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
