import {
  StatusBar,
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import * as S from "./styles";
import { Card } from "../../components/Card";
import { BalanceFinancial } from "../../components/BalanceFinancial";
import { Transaction } from "../../components/Transaction";
import { ITransactions } from "../../components/Transaction/types";
import { SafeAreaView } from "react-native-safe-area-context";

export function Home() {
  type teste = {
    id: number;
  } & ITransactions;

  const test: teste[] = [
    {
      id: 1,
      category: "Mercado",
      date: "12/10/2023",
      name: "Extra",
      type: "Cartão",
      value: 2000,
    },
    {
      id: 2,
      category: "Lazer",
      date: "a",
      name: "Computador FastShop",
      type: "Cartão",
      value: 4400,
    },
    {
      id: 3,
      category: "Saúde",
      date: "13/10/2023",
      name: "Exames",
      type: "Pix",
      value: 4120,
    },
  ];

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
          {test.map((item) => {
            return (
              <Transaction
                key={item.id}
                category={item.category}
                date={item.date}
                name={item.name}
                type={item.type}
                value={item.value}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
