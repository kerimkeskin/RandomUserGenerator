import React, { useState } from "react";
import { DrawerItem } from "@react-navigation/drawer";
import { View, StyleSheet, Image } from "react-native";
import { Drawer } from "react-native-paper";
import { Icon, HomeIcon, AboutIcon } from "../components/Icon";

const DrawerContent = (props) => {
  const onPressButton = () => {
    props.navigation.navigate("Home");
  };
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require("../assets/image/rug.gif")}
        style={{ width: "100%", height: 250 }}
      />

      <Drawer.Section style={{ flex: 1, backgroundColor: "#000" }}>
        <DrawerItem
          icon={() => <HomeIcon />}
          label="HOME"
          labelStyle={{
            color: "#000",
            fontWeight: "bold",
            fontSize: 18,
            letterSpacing: 1,
          }}
          onPress={() => onPressButton()}
          style={{ backgroundColor: "#fff" }}
        ></DrawerItem>
        <DrawerItem
          icon={() => <AboutIcon />}
          label="ABOUT"
          labelStyle={{
            color: "#000",
            fontWeight: "bold",
            fontSize: 18,
            letterSpacing: 1,
          }}
          onPress={() => {
            props.navigation.navigate("About");
          }}
          style={{ backgroundColor: "#fff" }}
        ></DrawerItem>
      </Drawer.Section>
    </View>
  );
};

const styles = StyleSheet.create({});

export default DrawerContent;
