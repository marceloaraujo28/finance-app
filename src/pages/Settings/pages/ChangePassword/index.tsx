import * as S from "./styles";
import { useState } from "react";
import { useAuthContext } from "../../../../context/AuthContext";
import { changePasswordHook } from "./hooks/changePasswordHook";
import { ActivityIndicator, Alert } from "react-native";

export function ChangePassword() {
  const { session } = useAuthContext();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const disabledButton = !confirmPassword || loading;

  const handleChangePassword = async () => {
    if (password !== confirmPassword) {
      Alert.alert("As senhas não estão iguais");
      return;
    }
    setLoading(true);
    await changePasswordHook({
      email: session?.user.email,
      password,
    });
    setLoading(false);
  };

  const onChangePassword = (value: string) => {
    setPassword(value);
  };

  const onChangeConfirmPassword = (value: string) => {
    setConfirmPassword(value);
  };

  return (
    <S.Container>
      <S.InputName>Nova senha:</S.InputName>
      <S.Input
        placeholder="Digite sua senha"
        value={password}
        onChangeText={onChangePassword}
        secureTextEntry
      />
      <S.InputName>Confirmar nova senha:</S.InputName>
      <S.Input
        placeholder="Confirme sua senha"
        value={confirmPassword}
        onChangeText={onChangeConfirmPassword}
        secureTextEntry
      />
      <S.Button disabled={disabledButton} onPress={handleChangePassword}>
        <S.ButtonText>Alterar {loading && <ActivityIndicator />}</S.ButtonText>
      </S.Button>
    </S.Container>
  );
}
