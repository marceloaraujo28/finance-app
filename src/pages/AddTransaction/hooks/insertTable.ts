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
  id,
  oldValue,
  oldTransaction,
}: IInsertParams) {
  const valueBalance = await useGetBalance(userId);
  let valueBalanceUpdate = 0;
  let transactionCorrectValue = 0;
  const old = Number(oldValue);
  const current = Number(value);

  if (id) {
    const { error } = await supabase
      .from("transaction")
      .update({
        value,
        name,
        category,
        description,
        paymentType,
        transactionType,
      })
      .eq("id", id);

    if (error) {
      console.log(error);
      Alert.alert("Erro ao editar a transação");
      return;
    }
    if (oldTransaction === transactionType) {
      if (old > current) {
        if (transactionType === "income") {
          transactionCorrectValue = old - current;
          valueBalanceUpdate =
            Number(valueBalance?.balance) - transactionCorrectValue;
        }
        if (transactionType === "expense") {
          transactionCorrectValue = old - current;
          valueBalanceUpdate =
            Number(valueBalance?.balance) + transactionCorrectValue;
        }
      } else {
        if (transactionType === "income") {
          transactionCorrectValue = current - old;
          valueBalanceUpdate =
            Number(valueBalance?.balance) + transactionCorrectValue;
        }
        if (transactionType === "expense") {
          transactionCorrectValue = current - old;
          valueBalanceUpdate =
            Number(valueBalance?.balance) - transactionCorrectValue;
        }
      }
    } else {
      if (oldTransaction === "expense") {
        transactionCorrectValue = old + current;
        valueBalanceUpdate =
          Number(valueBalance?.balance) + transactionCorrectValue;
      } else {
        transactionCorrectValue = old + current;
        valueBalanceUpdate =
          Number(valueBalance?.balance) - transactionCorrectValue;
      }
    }
  } else {
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

    if (transactionType === "income") {
      valueBalanceUpdate = Number(valueBalance?.balance) + Number(value);
    }

    if (transactionType === "expense") {
      valueBalanceUpdate = Number(valueBalance?.balance) - Number(value);
    }
  }

  const { error: ErrorBalance } = await supabase
    .from("balance")
    .update({ balance: valueBalanceUpdate })
    .eq("userId", userId)
    .select();

  if (ErrorBalance) {
    console.log(ErrorBalance);
    Alert.alert("Erro ao atualizar o balanço");
    return;
  }

  if (id) {
    Alert.alert("Transação Atualizada");
  } else {
    Alert.alert("Transação incluída");
  }
}
