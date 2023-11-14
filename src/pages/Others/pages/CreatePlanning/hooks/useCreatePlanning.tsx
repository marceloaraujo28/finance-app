import { Alert } from "react-native";
import { supabase } from "../../../../../config/supabaseConfig";
import { useCreatePlanningProps } from "./types";

export async function useCreatePlanning({
  metaValue,
  categorie,
  userId,
  id,
  date,
}: useCreatePlanningProps) {
  if (id) {
    const { error } = await supabase
      .from("planning")
      .update({
        metaValue,
        categorie,
        created_at: date,
      })
      .eq("id", id);

    if (error) {
      console.log(error);
      Alert.alert("Erro ao editar o planejamento");
      return;
    }
  } else {
    const { error } = await supabase.from("planning").insert({
      metaValue,
      categorie,
      userId,
      created_at: date,
    });

    if (error) {
      console.log(error);
      Alert.alert("Erro ao cadastrar novo planejamento");
      return;
    }
  }

  if (id) {
    Alert.alert("Planejamento Atualizado!");
  } else {
    Alert.alert("Planejamento Criado!");
  }
}
