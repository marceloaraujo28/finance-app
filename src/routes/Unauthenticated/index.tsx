import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../../pages/login";

export function Unauthenticated() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
