import { Alert } from "react-native";
import { supabase } from "../../config/supabaseConfig";
import { ITransactions } from "../../components/Transaction/types";
import { useGetBalance } from "../useGetBalance";

export async function useDeleteTransaction(
  id: number,
  transactionType: string,
  userId?: string
) {
  const { data: Transaction } = await supabase
    .from("transaction")
    .select("*")
    .eq("id", id)
    .single();

  const transaction = Transaction as ITransactions;

  const valueTransaction = transaction.value;

  const { error } = await supabase.from("transaction").delete().eq("id", id);

  if (error) {
    Alert.alert("Erro ao deletar a transação");
  }

  let valueBalanceUpdate = 0;

  const balance = await useGetBalance(userId);

  const valueCurrentBalance = balance?.balance;

  if (transactionType === "income") {
    valueBalanceUpdate = Number(valueCurrentBalance) - Number(valueTransaction);
  }

  if (transactionType === "expense") {
    valueBalanceUpdate = Number(valueCurrentBalance) + Number(valueTransaction);
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
}
