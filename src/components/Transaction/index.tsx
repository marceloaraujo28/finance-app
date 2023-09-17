import { Image } from "react-native";
import * as S from "./styles";
import { ITransactions } from "./types";

export function Transaction({
  category,
  date,
  name,
  type,
  value,
}: ITransactions) {
  return (
    <S.RecentTransaction>
      <S.TransactionImage>
        <Image
          source={{
            uri: "https://www.educolorir.com/imagem-carrinho-de-supermercado-dl19801.jpg",
          }}
          style={{ width: "100%", height: "100%" }}
        />
      </S.TransactionImage>
      <S.TransactionInfo>
        <S.TransactionName>{name}</S.TransactionName>
        <S.TransactionCategory>{`${category} | ${date}`}</S.TransactionCategory>
      </S.TransactionInfo>
      <S.TransactionValueInfo>
        <S.TransactionValue>R${value}</S.TransactionValue>
        <S.TransactionType>{type}</S.TransactionType>
      </S.TransactionValueInfo>
    </S.RecentTransaction>
  );
}
