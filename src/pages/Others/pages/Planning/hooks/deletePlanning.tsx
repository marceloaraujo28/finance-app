import { supabase } from "../../../../../config/supabaseConfig";

export async function deletePlanning({ id }: { id?: number }) {
  const { error } = await supabase.from("planning").delete().eq("id", id);
}
