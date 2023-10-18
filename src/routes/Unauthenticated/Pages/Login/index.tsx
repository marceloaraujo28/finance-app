import * as S from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { supabase } from "../../../../config/supabaseConfig";
import { ActivityIndicator, Alert } from "react-native";
import { useAuthContext } from "../../../../context/AuthContext";
import { useGetProfile } from "../../../../hooks/useGetProfile";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [loading, setLoading] = useState(false);

  const { setSession, setProfile } = useAuthContext();

  const navigation =
    useNavigation<
      StackNavigationProp<UnauthenticatedStackParamList, "Login">
    >();

  async function signIn() {
    setLoading(true);
    const { error, data } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      Alert.alert(error.message);
      setLoading(false);
      return;
    }

    const profile = await useGetProfile(data.user.id);

    if (profile) {
      setProfile({
        name: profile.name,
        lastName: profile.lastName,
      });
    }

    setSession(data.session);
    setLoading(false);
  }

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
        <S.ButtonLogin onPress={signIn}>
          <S.ButtonLoginText>Acessar</S.ButtonLoginText>
          {loading && <ActivityIndicator style={{ marginLeft: 5 }} />}
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
