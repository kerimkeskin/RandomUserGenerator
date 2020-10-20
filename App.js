import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import Navigator from "./src/navigation/Navigator";

const App = () => {
  return (
    <View style={styles.container}>
      <Navigator />
      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#171C1B",
  },
});

export default App;
