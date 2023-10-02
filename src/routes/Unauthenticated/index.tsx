import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "./Pages/Login";
import { Welcome } from "./Pages/Welcome";
import { Register } from "./Pages/Register";

const Stack = createStackNavigator<UnauthenticatedStackParamList>();

export function Unauthenticated() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
