import * as S from "./styles";
import { CategoriesInfo, ITransactions, paymentNames } from "./types";
import { formatDate } from "../../utils/formatDate";
import { formatValue } from "../../utils/formatValue";
import AntDesingIcon from "@expo/vector-icons/AntDesign";
import EvilIIcon from "@expo/vector-icons/EvilIcons";
import {
  Swipeable,
  GestureHandlerRootView,
} from "react-native-gesture-handler";

type TransactionProps = {
  handleClickDelete: (id: number, transactionType: string) => void;
  handeClickEdit: (id: number) => void;
  id: number;
} & ITransactions;

export function Transaction({
  category,
  created_at,
  name,
  paymentType,
  value,
  transactionType,
  id,
  handeClickEdit,
  handleClickDelete,
}: TransactionProps) {
  const leftSwipe = () => {
    const onPressEdit = () => {
      handeClickEdit(id);
    };

    return (
      <S.EditStyle onPress={onPressEdit}>
        <AntDesingIcon name="edit" size={20} color={"#fff"} />
      </S.EditStyle>
    );
  };

  const rigthSwipe = () => {
    const onPressDelete = () => {
      handleClickDelete(id, transactionType);
    };

    return (
      <S.DeleteStyle onPress={onPressDelete}>
        <EvilIIcon name="trash" size={25} color={"#fff"} />
      </S.DeleteStyle>
    );
  };

  return (
    <GestureHandlerRootView>
      <Swipeable renderLeftActions={leftSwipe} renderRightActions={rigthSwipe}>
        <S.RecentTransaction delay={500} animation="fadeIn">
          <S.TransactionImage
            background={CategoriesInfo[category].backgroundColor}
          >
            {CategoriesInfo[category].icon}
          </S.TransactionImage>
          <S.TransactionInfo>
            <S.TransactionName>{name}</S.TransactionName>
            <S.TransactionCategory>{`${
              CategoriesInfo[category].translation
            } | ${formatDate(created_at ?? "")}`}</S.TransactionCategory>
          </S.TransactionInfo>
          <S.TransactionValueInfo>
            <S.TransactionValue type={transactionType}>
              R${formatValue(value)}
            </S.TransactionValue>
            <S.paymentType>{paymentNames[paymentType]}</S.paymentType>
          </S.TransactionValueInfo>
        </S.RecentTransaction>
      </Swipeable>
    </GestureHandlerRootView>
  );
}
