import { Alert } from "react-native";
import { supabase } from "../../../config/supabaseConfig";
import { IInsertParams } from "./types";
import { useGetBalance } from "../../../hooks/useGetBalance";
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

  const valueBalance = await useGetBalance(userId);
  let valueBalanceUpdate = 0;

  if (transactionType === "income") {
    valueBalanceUpdate = Number(valueBalance?.balance) + Number(value);
  }

  if (transactionType === "expense") {
    valueBalanceUpdate = Number(valueBalance?.balance) - Number(value);
  }

  const { error: ErrorBalance } = await supabase
    .from("balance")
    .update({ balance: valueBalanceUpdate })
    .eq("userId", userId)
    .select();

  if (ErrorBalance) {
    console.log(error);
    Alert.alert("Erro ao atualizar o balanço");
    return;
  }

  Alert.alert("Transação incluída");
}
