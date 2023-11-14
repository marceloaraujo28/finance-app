import { supabase } from "../../../../../config/supabaseConfig";
import { SearchPlanningProps, SearchPlanningResponse } from "./types";

export async function searchPanning({
  userId,
}: SearchPlanningProps): Promise<SearchPlanningResponse[]> {
  const { data, error } = await supabase
    .from("planning")
    .select("*")
    .eq("userId", userId)
    .order("created_at", { ascending: true });

  if (error) {
    console.log("error:", error);
  }

  return data as SearchPlanningResponse[];
}
