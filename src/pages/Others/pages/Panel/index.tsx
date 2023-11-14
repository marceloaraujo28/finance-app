import * as S from "./styles";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { StackNavigationProp } from "@react-navigation/stack";
import { OthersStackParamList } from "../../types";
import { useNavigation } from "@react-navigation/native";
MaterialCommunityIcons;

export function Panel() {
  const navigation =
    useNavigation<StackNavigationProp<OthersStackParamList, "Panel">>();

  const handleClickPlanning = () => {
    navigation.navigate("Planning");
  };

  const handleClickTips = () => {
    navigation.navigate("Tips");
  };

  return (
    <S.Container>
      <S.CardItem onPress={handleClickPlanning}>
        <AntDesign name="barschart" size={50} color="#4F4F4F" />
        <S.Text>Planejamentos</S.Text>
      </S.CardItem>
      <S.CardItem onPress={handleClickTips}>
        <MaterialCommunityIcons
          name="lightbulb-on-outline"
          size={50}
          color="#4F4F4F"
        />
        <S.Text>Dicas de Insvetimentos</S.Text>
      </S.CardItem>
    </S.Container>
  );
}
