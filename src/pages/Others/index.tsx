import { createStackNavigator } from "@react-navigation/stack";
import { Panel } from "./pages/Panel";
import { CreatePlanning } from "./pages/CreatePlanning";
import { Planning } from "./pages/Planning";
import { Tips } from "./pages/Tips";
import { OthersStackParamList } from "./types";
import AntDesign from "@expo/vector-icons/AntDesign";

export function Others() {
  const Stack = createStackNavigator<OthersStackParamList>();

  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        name="Panel"
        component={Panel}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CreatePlanning"
        component={CreatePlanning}
        options={{
          title: "Criar Planejamento",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="Planning"
        options={({ navigation }) => ({
          title: "Planejamentos",
          headerTintColor: "#000",
          headerTitleAlign: "center",
          headerRight: () => (
            <AntDesign
              name="plus"
              size={18}
              onPress={() => navigation.navigate("CreatePlanning")}
              style={{ paddingRight: 20 }}
            />
          ),
        })}
        component={Planning}
      />
      <Stack.Screen
        name="Tips"
        component={Tips}
        options={{
          headerTitle: "Dicas",
        }}
      />
    </Stack.Navigator>
  );
}
