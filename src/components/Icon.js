import React from "react";
import { View, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export const HomeIcon = () => {
  return (
    <View>
      <Entypo name="home" size={34} color="black" />
    </View>
  );
};

export const AboutIcon = () => {
  return (
    <View>
      <MaterialCommunityIcons name="information" size={34} color="black" />
    </View>
  );
};
export const SettingsIcon = () => {
  return (
    <View>
      <MaterialIcons name="settings" size={34} color="black" />
    </View>
  );
};

const Icon = ({ onPress }) => {
  return (
    <View>
      <Entypo
        name="menu"
        size={38}
        color="white"
        style={styles.icon}
        onPress={onPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginRight: 20,
  },
});

export default Icon;
