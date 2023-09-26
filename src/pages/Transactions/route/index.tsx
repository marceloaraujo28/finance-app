import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { TransactionTab } from "../tabs/TransactionsTab";
import { IncomeTab } from "../tabs/IncomeTab";
import { ExpensesTab } from "../tabs/ExpensesTab";
import { Dimensions } from "react-native";

export function RouteTabs() {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="TransactionsTab"
      initialLayout={{
        width: Dimensions.get("window").width,
      }}
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: "Roboto_500Medium",
          color: "white",
        },
        tabBarStyle: { backgroundColor: "#2754cf" },
      }}
    >
      <Tab.Screen
        name="TransactionsTab"
        options={{
          title: "Transações",
        }}
        component={TransactionTab}
      />
      <Tab.Screen
        name="Recipes"
        options={{
          title: "Receitas",
        }}
        component={IncomeTab}
      />
      <Tab.Screen
        name="Expenses"
        options={{
          title: "Despesas",
        }}
        component={ExpensesTab}
      />
    </Tab.Navigator>
  );
}
