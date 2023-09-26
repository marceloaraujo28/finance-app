import { FlatList } from "react-native";
import { BalanceInfo } from "../components/BalanceInfo";
import * as S from "./styles";
import { Transaction } from "../../../../components/Transaction";
import { ListTransactions } from "../../../Home";

export function IncomeTab() {
  return (
    <S.GeralContainer>
      <S.Content>
        <S.Header>
          <BalanceInfo name="Valor total: " value="1000" />
        </S.Header>
        <FlatList
          data={ListTransactions}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item }) => (
            <Transaction
              category={item.category}
              date={item.date}
              name={item.name}
              paymentType={item.paymentType}
              value={item.value}
              transactionType={item.transactionType}
            />
          )}
        />
      </S.Content>
    </S.GeralContainer>
  );
}