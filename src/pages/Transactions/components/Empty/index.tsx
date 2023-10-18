import { Text, View } from "react-native";

export function Empty() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 13 }}>Nenhuma transação encontrada</Text>
    </View>
  );
}
