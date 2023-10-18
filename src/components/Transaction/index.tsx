import { Image, Text } from "react-native";
import * as S from "./styles";
import { ITransactions } from "./types";
import { formatDate } from "../../utils/formatDate";
import { formatValue } from "../../utils/formatValue";
import { Swipeable } from "react-native-gesture-handler";
import { View } from "react-native-animatable";

export function Transaction({
  category,
  created_at,
  name,
  paymentType,
  value,
  transactionType,
}: ITransactions) {
  const leftSwipe = () => {
    return (
      <View>
        <Text>TESTE</Text>
      </View>
    );
  };

  return (
    <Swipeable renderLeftActions={leftSwipe}>
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
          <S.TransactionCategory>{`${category} | ${formatDate(
            created_at ?? ""
          )}`}</S.TransactionCategory>
        </S.TransactionInfo>
        <S.TransactionValueInfo>
          <S.TransactionValue type={transactionType}>
            R${formatValue(value)}
          </S.TransactionValue>
          <S.paymentType>{paymentType}</S.paymentType>
        </S.TransactionValueInfo>
      </S.RecentTransaction>
    </Swipeable>
  );
}
