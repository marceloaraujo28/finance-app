import { ITransactions } from "../../../components/Transaction/types";
import { supabase } from "../../../config/supabaseConfig";

export type SearchRecentsData = {
  id: number;
} & ITransactions;

export async function searchRecents(
  userId: string | undefined
): Promise<SearchRecentsData[] | null> {
  const { data, error } = await supabase
    .from("transaction")
    .select("*")
    .eq("userId", userId)
    .order("created_at", { ascending: false })
    .limit(3);

  if (error) {
    console.log("error:", error);
  }

  return data as SearchRecentsData[];
}
