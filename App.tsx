import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./src/routes/routes";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black_Italic,
} from "@expo-google-fonts/roboto";
import {
  Poppins_400Regular,
  Poppins_700Bold,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";
import { ActivityIndicator, View } from "react-native";
import { AuthProvider } from "./src/context/AuthContext";
import { ThemeProvider } from "styled-components/native";
import { defaultTheme } from "./src/styles/theme/default";
335;
export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black_Italic,
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_500Medium,
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <AuthProvider>
        <NavigationContainer>
          <StatusBar translucent style="dark" />
          <Routes />
        </NavigationContainer>
      </AuthProvider>
    </ThemeProvider>
  );
}
