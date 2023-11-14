import React, { useEffect } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  Platform,
  UIManager,
} from "react-native";
import { AccordionList } from "react-native-accordion-list-view";
import { TipsData } from "./TipsMock";

export function Tips() {
  useEffect(() => {
    if (Platform.OS === "android") {
      if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    }
  }, []);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <AccordionList
          data={TipsData}
          customTitle={(item) => <Text>{item.title}</Text>}
          customBody={(item) => <Text>{item.body}</Text>}
          animationDuration={400}
          expandMultiple={true}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: "2%",
    paddingHorizontal: "3%",
    height: "100%",
    backgroundColor: "#e7e7e7",
  },
});
