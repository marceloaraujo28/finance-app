import { View, Text, ScrollView } from "react-native";
import * as S from "./styles";
import { Card } from "../../components/Card";
import { BalanceFinancial } from "../../components/BalanceFinancial";
import { Transaction } from "../../components/Transaction";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuthContext } from "../../context/AuthContext";
import { useState } from "react";
import { SearchRecentsData, searchRecents } from "./hooks/searchRecents";
import { useFocusEffect } from "@react-navigation/native";
import { useGetBalance } from "../../hooks/useGetBalance";
import { supabase } from "../../config/supabaseConfig";
import { useGetIncomeAndExpense } from "../../hooks/useGetIncomeAndExpense";

export function Home() {
  const [recentsData, setRecentsData] = useState<SearchRecentsData[] | null>(
    []
  );
  const { profile, session } = useAuthContext();
  const [balance, setBalance] = useState<string | undefined>("");
  const [incomeTotal, setIncomeTotal] = useState<number>(0);
  const [expensesTotal, setExpensesTotal] = useState<number>(0);

  async function recentslist() {
    if (session?.user.id) {
      const data = await searchRecents(session.user.id);
      if (JSON.stringify(data) !== JSON.stringify(recentsData)) {
        setRecentsData(data);
      }
    }
  }

  async function getBalance() {
    if (session?.user.id) {
      const balanceData = await useGetBalance(session.user.id);
      if (balance !== balanceData?.balance) {
        setBalance(balanceData?.balance);
      }
    }
  }

  async function getIncomeAndExpense() {
    const date = new Date();
    const value = await useGetIncomeAndExpense({
      month: date.getMonth() + 1,
      userId: session?.user.id,
      year: date.getFullYear(),
    });

    if (incomeTotal !== value?.income) {
      setIncomeTotal(value?.income || 0);
    }

    if (expensesTotal !== value?.expense) {
      setExpensesTotal(value?.expense || 0);
    }
  }

  useFocusEffect(() => {
    recentslist();
    getBalance();
    getIncomeAndExpense();
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: "#f0f8ff",
          marginTop: 10,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            backgroundColor: "white",
            elevation: 4,
            shadowOffset: { width: 5, height: 5 },
            shadowColor: "grey",
            shadowOpacity: 0.5,
            shadowRadius: 10,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
            padding: 15,
          }}
        >
          <S.Header>
            <S.PhotoName>
              <S.Photo>
                <Text>Teste</Text>
              </S.Photo>
              <S.UserName>Bem-vindo(a), {profile?.name}</S.UserName>
            </S.PhotoName>

            <Card
              balance={balance}
              cardName={`${profile?.name} ${profile?.lastName}`}
            />

            <S.FinanceValueArea>
              <BalanceFinancial name="Receitas" value={incomeTotal} type="up" />
              <BalanceFinancial
                name="Despesas"
                value={expensesTotal}
                type="down"
              />
            </S.FinanceValueArea>
          </S.Header>
        </View>
        <S.TitleTransaction>Transações Recentes</S.TitleTransaction>
        <View
          style={{
            backgroundColor: "white",
            elevation: 4,
            shadowOffset: { width: 5, height: 5 },
            shadowColor: "black",
            shadowOpacity: 0.5,
            shadowRadius: 10,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            padding: 15,
            marginTop: 5,
            flex: 1,
          }}
        >
          {recentsData?.length ? (
            recentsData?.map((item) => {
              return (
                <Transaction
                  key={item.id}
                  category={item.category}
                  created_at={item.created_at}
                  name={item.name}
                  paymentType={item.paymentType}
                  value={item.value}
                  transactionType={item.transactionType}
                />
              );
            })
          ) : (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 13 }}>
                Você não possui nenhuma transação registrada
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
