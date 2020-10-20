import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Button = ({ onPress, title }) => {
  return (
    <TouchableOpacity style={styles.but} onPress={onPress}>
      <FontAwesome
        name="random"
        size={23}
        color="yellow"
        style={{ padding: 10, justifyContent: "center", alignItems: "center" }}
      />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  but: {
    width: 270,
    height: 60,
    backgroundColor: "#000",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",

    flexDirection: "row",
  },
  text: {
    color: "#fff",
    fontWeight:"bold",
    textAlign: "center",
    fontSize: 30,
    letterSpacing: 4,
  },
});

export default Button;
