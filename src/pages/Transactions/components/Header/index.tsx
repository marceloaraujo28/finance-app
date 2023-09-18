import React from "react";
import { View, Text } from "react-native";

export function Header() {
  return (
    <View
      style={{
        height: 50,
        backgroundColor: "#2754cf",
      }}
    >
      <Text
        style={{
          color: "white",
        }}
      >
        Calendário e Gráfico
      </Text>
    </View>
  );
}
