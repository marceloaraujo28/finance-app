import { TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { supabase } from "../../config/supabaseConfig";
import { useAuthContext } from "../../context/AuthContext";

export function Settings() {
  const { setSession } = useAuthContext();

  const onPress = () => {
    supabase.auth.signOut();
    setSession(null);
  };

  return (
    <TouchableOpacity
      style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
      onPress={onPress}
    >
      <AntDesign name="logout" size={40} />
    </TouchableOpacity>
  );
}
