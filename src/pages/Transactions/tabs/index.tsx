import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../components/Header";
import { TransactionRoute } from "../route/TransactionRoute";

export function TransactionsPage() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#1749d1" }}>
      <Header />
      <TransactionRoute />
    </SafeAreaView>
  );
}
