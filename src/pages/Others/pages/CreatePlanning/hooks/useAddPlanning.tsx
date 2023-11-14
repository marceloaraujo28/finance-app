import { Alert } from "react-native";
import { supabase } from "../../../../../config/supabaseConfig";
import { useCreatePlanningProps } from "./types";

export async function useCreatePlanning({
  metaValue,
  categorie,
  userId,
}: useCreatePlanningProps) {
  const { error } = await supabase.from("planning").insert({
    metaValue,
    categorie,
    userId,
  });

  if (error) {
    console.log(error);
    Alert.alert("Erro ao cadastrar novo planejamento");
    return;
  }

  Alert.alert("Planejamento Criado!");
}
