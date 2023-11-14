import { Alert } from "react-native";
import { supabase } from "../../../../../../config/supabaseConfig";

export async function changePasswordHook({
  email,
  password,
}: {
  email?: string;
  password?: string;
}) {
  const { error } = await supabase.auth.updateUser({
    email,
    password,
  });

  if (error) {
    Alert.alert("Erro ao atualizar a senha");
    console.log(error);
    return;
  }

  Alert.alert("Senha alterada com sucesso");
  return;
}
