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
import {
  CategoriesInfo,
  Category,
} from "../../../../../../components/Transaction/types";
import { ActivityIndicator } from "react-native";

export function PlanningCard({
  created_at,
  metaValue,
  categorie,
  handleDelete,
  handleEdit,
  id,
}: PlannigCardProps) {
  const [valueSpent, setValueSpent] = useState(0);
  const [loading, setLoading] = useState(false);
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
      setLoading(false);
    }
    setLoading(true);
    fetchData();
  }, []);

  const leftSwipe = () => {
    const editPlanning = () => {
      handleEdit(id);
    };

    return (
      <S.EditStyle onPress={editPlanning}>
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
    <S.PlanningContainer delay={500} animation="fadeIn">
      <GestureHandlerRootView>
        <Swipeable
          renderLeftActions={leftSwipe}
          renderRightActions={rigthSwipe}
        >
          <S.Infos>
            <S.Bar
              background={CategoriesInfo[categorie as Category].backgroundColor}
            />
            <S.PhotoCategory>
              {CategoriesInfo[categorie as Category].icon}
            </S.PhotoCategory>
            <S.TitleAndDate>
              <S.Title>
                {CategoriesInfo[categorie as Category].translation}
              </S.Title>
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
            {loading ? (
              <ActivityIndicator size={16} />
            ) : (
              `Valor gasto: ${formatValue(String(valueSpent))}`
            )}
          </S.ProgressValue>
        </S.ProgressValueContainer>
        <S.ProgressBarContainer>
          <S.ProgressBar
            delay={1000}
            animation="fadeInLeft"
            percent={porcentagem}
          ></S.ProgressBar>
        </S.ProgressBarContainer>
        <S.ProgressBarPercent percent={porcentagem}>
          {porcentagem}%
        </S.ProgressBarPercent>
      </S.ProgressContainer>
    </S.PlanningContainer>
  );
}
