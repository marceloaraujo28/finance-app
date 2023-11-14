import { Alert } from "react-native";
import { supabase } from "../../../../../config/supabaseConfig";

export async function changeName({
  name,
  lastName,
  userid,
}: {
  name?: string;
  lastName?: string;
  userid?: string;
}): Promise<boolean> {
  const { error } = await supabase
    .from("profile")
    .update({ name, lastName })
    .eq("userId", userid);

  if (error) {
    Alert.alert("Erro ao atualizar o nome");
    console.log(error);
    return false;
  }

  Alert.alert("Nome alterado com sucesso");
  return true;
}
