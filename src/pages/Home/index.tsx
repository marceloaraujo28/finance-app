import { View, Text, ScrollView } from "react-native";
import * as S from "./styles";
import { Card } from "../../components/Card";
import { BalanceFinancial } from "../../components/BalanceFinancial";
import { Transaction } from "../../components/Transaction";
import { ITransactions } from "../../components/Transaction/types";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuthContext } from "../../context/AuthContext";

type teste = {
  id: number;
} & ITransactions;

export const ListTransactions: teste[] = [
  {
    id: 1,
    category: "Education",
    date: "12/10/2023",
    name: "Extra",
    paymentType: "Cash",
    value: "2000",
    transactionType: "income",
  },
  {
    id: 2,
    category: "Food",
    date: "a",
    name: "Computador FastShop",
    paymentType: "Card",
    value: "4400",
    transactionType: "expense",
  },
  {
    id: 3,
    category: "Health",
    date: "13/10/2023",
    name: "Exames",
    paymentType: "PIX",
    value: "4120",
    transactionType: "income",
  },
];

export function Home() {
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
            <S.Photo>
              <Text>Foto</Text>
            </S.Photo>

            <Card balance={1000} cardName="Marcelo Messias Araújo" />

            <S.FinanceValueArea>
              <BalanceFinancial name="Receitas" value={50000} type="up" />
              <BalanceFinancial name="Despesas" value={10000} type="down" />
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
          {ListTransactions.map((item) => {
            return (
              <Transaction
                key={item.id}
                category={item.category}
                date={item.date}
                name={item.name}
                paymentType={item.paymentType}
                value={item.value}
                transactionType={item.transactionType}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
