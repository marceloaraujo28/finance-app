import { FlatList } from "react-native";
import { BalanceInfo } from "../components/BalanceInfo";
import * as S from "./styles";
import { ITransactions } from "../../../../components/Transaction/types";
import { Transaction } from "../../../../components/Transaction";

type teste = {
  id: number;
} & ITransactions;

export function TransactionTab() {
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
    <S.GeralContainer>
      <S.Content>
        <S.Header>
          <BalanceInfo name="Saldo Atual: " value="1000" />
          <BalanceInfo name="Balanço Mensal: " value="-2000" />
        </S.Header>
        <FlatList
          data={test}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item }) => (
            <Transaction
              category={item.category}
              date={item.date}
              name={item.name}
              type={item.type}
              value={item.value}
            />
          )}
        />
      </S.Content>
    </S.GeralContainer>
  );
}
