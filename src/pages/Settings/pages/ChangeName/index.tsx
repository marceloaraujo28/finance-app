import { TouchableOpacity } from "react-native";
import * as S from "./styles";
import { useState } from "react";
import { changeName } from "./hooks/changeName";
import { useAuthContext } from "../../../../context/AuthContext";
import { ActivityIndicator } from "react-native";

export function ChangeName() {
  const { session, profile, setProfile } = useAuthContext();

  const [name, setName] = useState(profile?.name);
  const [lastName, setLastName] = useState(profile?.lastName);
  const [loading, setLoading] = useState(false);

  const disabledButton = !lastName || !name || loading;

  const handleChangeName = async () => {
    setLoading(true);
    const change = await changeName({
      name,
      lastName,
      userid: session?.user.id,
    });

    if (change) {
      setProfile({
        name: name ?? "",
        lastName: lastName ?? "",
      });
    }
    setLoading(false);
  };

  const onChangeName = (value: string) => {
    setName(value);
  };

  const onChangeLastName = (value: string) => {
    setLastName(value);
  };

  return (
    <S.Container>
      <S.InputName>Nome:</S.InputName>
      <S.Input
        placeholder="Digite seu nome"
        value={name}
        onChangeText={onChangeName}
      />
      <S.InputName>Sobrenome:</S.InputName>
      <S.Input
        placeholder="Digite seu sobrenome"
        value={lastName}
        onChangeText={onChangeLastName}
      />
      <S.Button disabled={disabledButton} onPress={handleChangeName}>
        <S.ButtonText>Alterar {loading && <ActivityIndicator />}</S.ButtonText>
      </S.Button>
    </S.Container>
  );
}
