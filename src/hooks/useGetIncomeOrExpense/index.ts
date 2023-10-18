import { Alert } from "react-native";
import { supabase } from "../../config/supabaseConfig";
import { GetIncomeOrExpenseProps, TransactionsData } from "../types";

export async function useGetIncomeOrExpense({
  month,
  transactiontype,
  userId,
  year,
}: GetIncomeOrExpenseProps): Promise<TransactionsData[] | undefined> {
  const { data, error } = await supabase.rpc("incomesOrExpenses", {
    user_id: userId,
    month,
    year,
    transactiontype,
  });

  if (error) Alert.alert(`${error}`);

  return data;
}
