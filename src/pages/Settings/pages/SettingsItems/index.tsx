import { useNavigation } from "@react-navigation/native";
import { useAuthContext } from "../../../../context/AuthContext";
import * as S from "./styles";
import AntDesign from "@expo/vector-icons/AntDesign";
import { StackNavigationProp } from "@react-navigation/stack";
import { SettingsStackParamList } from "../../types";
import { supabase } from "../../../../config/supabaseConfig";

export function SettingsItems() {
  const { profile, setSession, session } = useAuthContext();
  const navigation =
    useNavigation<
      StackNavigationProp<SettingsStackParamList, "SettingsItems">
    >();

  const onChangeName = () => {
    navigation.navigate("ChangeName");
  };

  const onChangePassword = () => {
    navigation.navigate("ChangePassword");
  };

  const onPressLogout = () => {
    supabase.auth.signOut();
    setSession(null);
  };

  return (
    <S.Container>
      <S.Profile>
        <S.Icon>
          <AntDesign name="user" size={20} color="#fff" />
        </S.Icon>
        <S.Name>
          {profile?.name} {profile?.lastName}
        </S.Name>
        <S.Email>{session?.user.email}</S.Email>
      </S.Profile>
      <S.Items>
        <S.ItemContainer onPress={onChangeName}>
          <S.ItemName>Alterar Nome</S.ItemName>
          <AntDesign name="arrowright" size={20} />
        </S.ItemContainer>
        <S.ItemContainer onPress={onChangePassword}>
          <S.ItemName>Alterar senha</S.ItemName>
          <AntDesign name="arrowright" size={20} />
        </S.ItemContainer>
        <S.ItemContainer onPress={onPressLogout}>
          <S.ItemName>Sair</S.ItemName>
          <AntDesign name="logout" size={20} />
        </S.ItemContainer>
      </S.Items>
    </S.Container>
  );
}
