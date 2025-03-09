import { StyleSheet, Text } from "react-native";

import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

import "../../global.css"; // NK: USE IT Everywhere

export default function TestTailwind() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <Text className={"text-red-500"}>
        Open up App.js to start working on your App!
      </Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
