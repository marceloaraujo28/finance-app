import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TransactionsPage } from "./tabs";
import { GraphScreen } from "./tabs/Graph";
import { TransactionProvider } from "./context";
import { TransactionsStackParamList } from "./type";

export function RouteTransactionsTabs() {
  const Stack = createNativeStackNavigator<TransactionsStackParamList>();

  return (
    <TransactionProvider>
      <Stack.Navigator initialRouteName="TransactionsPage">
        <Stack.Screen
          name="TransactionsPage"
          component={TransactionsPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="GraphScreen"
          component={GraphScreen}
          options={{
            headerStyle: { backgroundColor: "#1749d1" },
            headerTintColor: "#fff",
            title: "Gráfico",
            headerShown: true,
          }}
        />
      </Stack.Navigator>
    </TransactionProvider>
  );
}
