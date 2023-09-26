import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../../../pages/Home";
import { Settings } from "../../../pages/Settings";
import { Transactions } from "../../../pages/Transactions";
import Octicons from "@expo/vector-icons/Octicons";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { AddTransaction } from "../../../pages/AddTransaction";

export function Principal() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ size }) => <Octicons name="home" size={size} />,
        }}
      />
      <Tab.Screen
        name="Transactions"
        component={Transactions}
        options={{
          title: "Transações",
          headerShown: false,
          tabBarIcon: ({ size }) => (
            <Octicons name="arrow-switch" size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="AddTransaction"
        component={AddTransaction}
        options={{
          title: "",
          headerShown: false,
          tabBarIcon: () => <Ionicons name="add-circle-outline" size={45} />,
          tabBarItemStyle: {
            marginTop: -30,
          },
        }}
      />
      <Tab.Screen
        name="Others"
        component={Settings}
        options={{
          title: "Outros",
          headerShown: false,
          tabBarIcon: ({ size }) => <AntDesign name="bars" size={size} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          title: "Configurações",
          headerShown: false,
          tabBarIcon: ({ size }) => <Octicons name="gear" size={size} />,
        }}
      />
    </Tab.Navigator>
  );
}
