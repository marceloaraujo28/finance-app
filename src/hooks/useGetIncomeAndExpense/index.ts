import { Alert } from "react-native";
import { supabase } from "../../config/supabaseConfig";

export interface IGetIncomeAndExpense {
  month: number;
  year: number;
  userId?: string;
}

export type sum = {
  expense: number;
  income: number;
};

export async function useGetIncomeAndExpense({
  month,
  userId,
  year,
}: IGetIncomeAndExpense): Promise<sum | undefined> {
  const { data, error } = await supabase.rpc("sumIncomeAndExpenses", {
    month,
    user_id: userId,
    year,
  });

  if (error) {
    Alert.alert(`${error}`);
    return;
  }

  return data as sum;
}
