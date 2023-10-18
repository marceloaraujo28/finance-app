import { Alert } from "react-native";
import { supabase } from "../../config/supabaseConfig";

export type ProfileData = {
  name: string;
  lastName: string;
};

export async function useGetProfile(
  userId: string | undefined
): Promise<ProfileData | null> {
  if (!userId) {
    return null;
  }

  const { data: Profile, error } = await supabase
    .from("profile")
    .select("*")
    .eq("userId", userId);

  if (error) {
    console.log(error);
    Alert.alert("erro ao buscar o perfil");
  }

  return Profile?.[0] as ProfileData | null;
}
