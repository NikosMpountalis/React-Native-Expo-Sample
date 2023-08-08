import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import GenericButton from "./src/components/GenericButton";

export default function App() {
  const onPressGenericButton = () => {
    return;
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <GenericButton
        title="Sample Button"
        onPress={onPressGenericButton}
        testID="sample-btn"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
