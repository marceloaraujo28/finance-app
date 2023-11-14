import { Alert } from "react-native";
import { Category } from "../../../../../../../components/Transaction/types";
import { supabase } from "../../../../../../../config/supabaseConfig";

type GetSumExpenseProps = {
  userId?: string;
  month: number;
  categorie: string;
  year: number;
};

export type OneExpenseCategory = {
  [key in Category]: number;
};

export async function getSumOneExpenses({
  month,
  year,
  userId,
  categorie,
}: GetSumExpenseProps): Promise<OneExpenseCategory> {
  const { data, error } = await supabase.rpc("oneExpenseCategory", {
    user_id: userId,
    month,
    year,
    categorie,
  });

  if (error) Alert.alert(`${error}`);

  return data as OneExpenseCategory;
}
