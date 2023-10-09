import * as S from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { supabase } from "../../../../config/supabaseConfig";
import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export function Register() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameFocused, setNameFocused] = useState(false);
  const [lastNameFocused, setLastNameFocused] = useState(false);
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

    const { error: errorAuth, data } = await supabase.auth.signUp({
      email,
      password,
    });

    const { error: errorInsert } = await supabase.from("profile").insert({
      userId: data.user?.id,
      name,
      lastName,
    });

    if (errorAuth) {
      Alert.alert(errorAuth.message);
      setLoading(false);
      return;
    }

    if (errorInsert) {
      Alert.alert(errorInsert.message);
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
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled={true}
      style={{ flex: 1 }}
      keyboardVerticalOffset={0}
    >
      <SafeAreaView style={{ flex: 1, backgroundColor: "#2754cf" }}>
        <S.WelcomeContainer animation="fadeInLeft" delay={500}>
          <S.WelcomeText>{"Cadastre-se"}</S.WelcomeText>
        </S.WelcomeContainer>

        <S.RegisterForm animation="fadeInUp" delay={500}>
          <ScrollView keyboardShouldPersistTaps="handled">
            <S.EmailText>Nome</S.EmailText>
            <S.EmailInput
              placeholder="Digite seu nome"
              selectionColor="#2754cf"
              onChangeText={setName}
              onBlur={() => setNameFocused(false)}
              onFocus={() => setNameFocused(true)}
              focusable={nameFocused}
            />
            <S.EmailText>Sobrenome</S.EmailText>
            <S.EmailInput
              placeholder="Digite sobrenome"
              selectionColor="#2754cf"
              onChangeText={setLastName}
              onBlur={() => setLastNameFocused(false)}
              onFocus={() => setLastNameFocused(true)}
              focusable={lastNameFocused}
            />
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
              <S.ButtonLoginText>Registrar</S.ButtonLoginText>
              {loading && <ActivityIndicator style={{ marginLeft: 5 }} />}
            </S.ButtonLogin>
            <S.ButtonRegister onPress={handleClickLogin}>
              <S.ButtonRegisterText>
                Já possui uma conta? Faça um login
              </S.ButtonRegisterText>
            </S.ButtonRegister>
          </ScrollView>
        </S.RegisterForm>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
