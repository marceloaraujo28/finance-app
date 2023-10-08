import { Alert } from "react-native";
import { supabase } from "../../../config/supabaseConfig";
import { IInsertParams } from "./types";
export async function insertTable({
  value,
  category,
  name,
  description,
  paymentType,
  transactionType,
  userId,
}: IInsertParams) {
  const { error } = await supabase.from("transaction").insert({
    value,
    name,
    category,
    description,
    paymentType,
    transactionType,
    userId,
  });

  if (error) {
    console.log(error);
    Alert.alert("Erro ao inserir na tabela");
    return;
  }

  Alert.alert("Transação incluída");
}
