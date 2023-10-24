import { Alert } from "react-native";
import { supabase } from "../../../config/supabaseConfig";
import { Category } from "../../../components/Transaction/types";

type GetSumExpenseProps = {
  userId?: string;
  month: number;
  year: number;
};

export type ExpenseCategory = {
  [key in Category]: number;
};

export async function getSumExpenses({
  month,
  year,
  userId,
}: GetSumExpenseProps): Promise<ExpenseCategory | null> {
  const { data, error } = await supabase.rpc("expensesCategory", {
    user_id: userId,
    month,
    year,
  });

  if (error) Alert.alert(`${error}`);

  if (data) {
    return data as ExpenseCategory;
  }

  return null;
}
