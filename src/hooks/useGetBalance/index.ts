import { Alert } from "react-native";
import { supabase } from "../../config/supabaseConfig";

export type BalanceData = {
  balance: string;
};

export async function useGetBalance(
  userId: string | undefined
): Promise<BalanceData | null> {
  if (!userId) {
    return null;
  }

  const { data: Balance, error } = await supabase
    .from("balance")
    .select("*")
    .eq("userId", userId);

  if (error) {
    console.log(error);
    Alert.alert("erro ao buscar o saldo");
  }

  return Balance?.[0] as BalanceData | null;
}
