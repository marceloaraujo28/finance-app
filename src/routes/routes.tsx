import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Login } from "../pages/login";
import { Home } from "../pages/Home";
import { Settings } from "../pages/Settings";

export function Routes() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const Authenticate = false;

  function App() {
    return (
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    );
  }

  function LoginScreen() {
    return (
      <Stack.Navigator initialRouteName="App">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="App"
          component={App}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    );
  }

  return LoginScreen();
}
