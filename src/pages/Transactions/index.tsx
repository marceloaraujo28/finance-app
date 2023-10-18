import { SafeAreaView } from "react-native-safe-area-context";
import { RouteTabs } from "./route";
import { Header } from "./components/Header";
import { TransactionProvider } from "./context";

export function Transactions() {
  return (
    <TransactionProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#1749d1" }}>
        <Header />
        <RouteTabs />
      </SafeAreaView>
    </TransactionProvider>
  );
}
