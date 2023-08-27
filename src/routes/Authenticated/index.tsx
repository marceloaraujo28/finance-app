import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Principal } from "./screens/Principal";

export function Authenticated() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Principal">
      <Stack.Screen
        name="Principal"
        component={Principal}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
