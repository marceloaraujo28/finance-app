import * as S from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { supabase } from "../../../../config/supabaseConfig";
import { ActivityIndicator, Alert } from "react-native";

export function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [loading, setLoading] = useState(false);

  const disabled = !email || !password;

  const navigation =
    useNavigation<
      StackNavigationProp<UnauthenticatedStackParamList, "Register">
    >();

  async function signUp() {
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      Alert.alert(error.message);
      setLoading(false);
      return;
    }

    setLoading(false);
    navigation.navigate("Login");
  }

  function handleClickLogin() {
    navigation.navigate("Login");
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#2754cf" }}>
      <S.WelcomeContainer animation="fadeInLeft" delay={500}>
        <S.WelcomeText>{"Cadastre-se"}</S.WelcomeText>
      </S.WelcomeContainer>

      <S.RegisterForm animation="fadeInUp" delay={500}>
        <S.EmailText>Email</S.EmailText>
        <S.EmailInput
          placeholder="Digite seu email"
          selectionColor="#2754cf"
          onChangeText={setEmail}
          onBlur={() => setEmailFocused(false)}
          onFocus={() => setEmailFocused(true)}
          focusable={emailFocused}
        />
        <S.PasswordText>Senha</S.PasswordText>
        <S.PasswordInput
          placeholder="Digite sua senha"
          selectionColor="#2754cf"
          secureTextEntry
          onChangeText={setPassword}
          onBlur={() => setPasswordFocused(false)}
          onFocus={() => setPasswordFocused(true)}
          focusable={passwordFocused}
        />
        <S.ButtonLogin onPress={signUp} disabled={disabled}>
          <S.ButtonLoginText>Acessar</S.ButtonLoginText>
          {loading && <ActivityIndicator style={{ marginLeft: 5 }} />}
        </S.ButtonLogin>
        <S.ButtonRegister onPress={handleClickLogin}>
          <S.ButtonRegisterText>
            Já possui uma conta? Faça um login
          </S.ButtonRegisterText>
        </S.ButtonRegister>
      </S.RegisterForm>
    </SafeAreaView>
  );
}
