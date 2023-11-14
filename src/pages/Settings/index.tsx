import { createStackNavigator } from "@react-navigation/stack";
import { SettingsStackParamList } from "./types";
import { SettingsItems } from "./pages/SettingsItems";
import { ChangeName } from "./pages/ChangeName";
import { ChangePassword } from "./pages/ChangePassword";

export function Settings() {
  const Stack = createStackNavigator<SettingsStackParamList>();

  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        name="SettingsItems"
        component={SettingsItems}
        options={{
          headerStyle: { backgroundColor: "#fff" },
          headerTintColor: "#000",
          title: "Configurações",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="ChangeName"
        component={ChangeName}
        options={{
          title: "Alterar o nome",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="ChangePassword"
        options={{
          title: "Alterar a senha",
          headerTitleAlign: "center",
        }}
        component={ChangePassword}
      />
    </Stack.Navigator>
  );
}
