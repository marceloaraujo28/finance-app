import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RouteTabs } from "./route";
import { Header } from "./components/Header";

export function Transactions() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#1749d1" }}>
      <Header />
      <RouteTabs />
    </SafeAreaView>
  );
}
