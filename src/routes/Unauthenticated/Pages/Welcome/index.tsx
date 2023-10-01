import React from "react";
import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import * as S from "./styles";

export function Welcome() {
  const navigation =
    useNavigation<
      StackNavigationProp<UnauthenticatedStackParamList, "Welcome">
    >();

  function handleClickAcess() {
    navigation.navigate("Login");
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <S.LogoContent>
        <S.Image
          source={require("../../../../assets/logotext.png")}
          animation="fadeIn"
        />
      </S.LogoContent>
      <S.MessageContainer delay={600} animation="fadeInUp">
        <S.Message>Monitore, organize seus gastos de qualquer lugar!</S.Message>
        <S.Access>Faça login para acessar</S.Access>

        <S.ButtonContainer onPress={handleClickAcess}>
          <S.ButtonText>Acessar</S.ButtonText>
        </S.ButtonContainer>
      </S.MessageContainer>
    </SafeAreaView>
  );
}
