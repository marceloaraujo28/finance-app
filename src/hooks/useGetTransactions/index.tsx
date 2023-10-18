import { Alert } from "react-native";
import { supabase } from "../../config/supabaseConfig";
import { IGetTransactions, TransactionsData } from "../types";

export async function useGetTransactions({
  month,
  userId,
  year,
}: IGetTransactions): Promise<TransactionsData[] | undefined> {
  const { data, error } = await supabase.rpc("transactionRecents", {
    user_id: userId,
    month,
    year,
  });

  if (error) {
    Alert.alert(`${error}`);
    return undefined;
  }
  return data;
}
