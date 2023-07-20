import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../pages/login";

export function Routes() {
  const Stack = createNativeStackNavigator();

  const Authenticate = false;

  function LoginScreen() {
    return (
      <Stack.Navigator initialRouteName="Login">
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

  return LoginScreen();
}
