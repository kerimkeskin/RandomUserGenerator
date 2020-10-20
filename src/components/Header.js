import React, { useState } from "react";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import { AppLoading } from "expo";
import * as Font from "expo-font";

const Header = ({ icon }) => {
  const fetchFonts = () => {
    return Font.loadAsync({
      ExtraBold: require("../../src/assets/fonts/Montserrat-ExtraBold.ttf"),
      "SemiBold ": require("../../src/assets/fonts/Montserrat-SemiBold.ttf"),
      Thin: require("../../src/assets/fonts/Montserrat-Thin.ttf"),
    });
  };
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
      />
    );
  }
  //171C1B

  return (
    <SafeAreaView>
      <View style={styles.iconcontainer}>
        {icon}
        <View style={styles.menu}>
          <Text style={styles.text}>RANDOM USER GENERATOR</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  menu: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "center",
  },
  iconcontainer: {
    alignItems: "center",
    flexDirection: "row",
    margin: "2%",
    padding: 15,
  },
  text: {
    fontSize: 19,
    fontFamily: "ExtraBold",
    color: "#fff",
  },
});

export default Header;
