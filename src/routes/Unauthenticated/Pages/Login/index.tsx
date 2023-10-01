import * as S from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export function Login() {
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const navigation =
    useNavigation<
      StackNavigationProp<UnauthenticatedStackParamList, "Login">
    >();

  function handleClickRegister() {
    navigation.navigate("Register");
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#2754cf" }}>
      <S.WelcomeContainer animation="fadeInLeft" delay={500}>
        <S.WelcomeText>{"Bem vindo(a)"}</S.WelcomeText>
      </S.WelcomeContainer>

      <S.LoginForm animation="fadeInUp" delay={500}>
        <S.EmailText>Email</S.EmailText>
        <S.EmailInput
          placeholder="Digite seu email"
          selectionColor="#2754cf"
          onBlur={() => setEmailFocused(false)}
          onFocus={() => setEmailFocused(true)}
          focusable={emailFocused}
        />
        <S.PasswordText>Senha</S.PasswordText>
        <S.PasswordInput
          placeholder="Digite sua senha"
          selectionColor="#2754cf"
          onBlur={() => setPasswordFocused(false)}
          onFocus={() => setPasswordFocused(true)}
          focusable={passwordFocused}
        />
        <S.ButtonLogin>
          <S.ButtonLoginText>Acessar</S.ButtonLoginText>
        </S.ButtonLogin>
        <S.ButtonRegister onPress={handleClickRegister}>
          <S.ButtonRegisterText>
            Não possui uma conta? Cadastre-se
          </S.ButtonRegisterText>
        </S.ButtonRegister>
      </S.LoginForm>
    </SafeAreaView>
  );
}
