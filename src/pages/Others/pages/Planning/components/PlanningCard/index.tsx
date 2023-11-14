import * as S from "./styles";

import AntDesign from "@expo/vector-icons/AntDesign";
import AntDesingIcon from "@expo/vector-icons/AntDesign";
import EvilIIcon from "@expo/vector-icons/EvilIcons";

import {
  Swipeable,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { PlannigCardProps } from "./types";
import { format } from "date-fns";
import pt from "date-fns/locale/pt";
import { formatValue } from "../../../../../../utils/formatValue";
import { useEffect, useState } from "react";
import { getSumOneExpenses } from "./hooks/getSumOneExpense";
import { useAuthContext } from "../../../../../../context/AuthContext";
import { Category } from "../../../../../../components/Transaction/types";

export function PlanningCard({
  created_at,
  metaValue,
  categorie,
  handleDelete,
  id,
}: PlannigCardProps) {
  const [valueSpent, setValueSpent] = useState(0);
  const date = new Date(created_at);

  const porcentagem = Math.round((valueSpent / Number(metaValue)) * 100);

  const { session } = useAuthContext();

  const getSumExpense = async () => {
    const sum = await getSumOneExpenses({
      categorie: categorie,
      month: date.getMonth() + 1,
      year: date.getFullYear(),
      userId: session?.user.id,
    });

    if (sum) {
      setValueSpent(sum[categorie as Category]);
    }
  };

  useEffect(() => {
    async function fetchData() {
      await getSumExpense();
    }
    fetchData();
  }, []);

  const leftSwipe = () => {
    return (
      <S.EditStyle>
        <AntDesingIcon name="edit" size={20} color={"#fff"} />
      </S.EditStyle>
    );
  };

  const rigthSwipe = () => {
    const deletePlanning = () => {
      handleDelete(id);
    };

    return (
      <S.DeleteStyle onPress={deletePlanning}>
        <EvilIIcon name="trash" size={25} color={"#fff"} />
      </S.DeleteStyle>
    );
  };

  return (
    <S.PlanningContainer>
      <GestureHandlerRootView>
        <Swipeable
          renderLeftActions={leftSwipe}
          renderRightActions={rigthSwipe}
        >
          <S.Infos>
            <S.Bar />
            <S.PhotoCategory>
              <AntDesign name="apple-o" size={20} />
            </S.PhotoCategory>
            <S.TitleAndDate>
              <S.Title>{categorie}</S.Title>
              <S.Date>{format(date, "MMMM, yyyy", { locale: pt })}</S.Date>
            </S.TitleAndDate>
            <S.ValueInfo>
              <S.ValueTitle>Meta de gasto</S.ValueTitle>
              <S.Value>R${formatValue(metaValue)}</S.Value>
            </S.ValueInfo>
          </S.Infos>
        </Swipeable>
      </GestureHandlerRootView>
      <S.ProgressContainer>
        <S.ProgressValueContainer>
          <S.ProgressValue>
            Valor gasto: {formatValue(String(valueSpent))}
          </S.ProgressValue>
        </S.ProgressValueContainer>
        <S.ProgressBarContainer>
          <S.ProgressBar percent={porcentagem}></S.ProgressBar>
        </S.ProgressBarContainer>
      </S.ProgressContainer>
    </S.PlanningContainer>
  );
}
