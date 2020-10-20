import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Card = ({ Age, Street, City, Postcode, Email, Phone }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.icon}>
          <FontAwesome5 name="birthday-cake" size={24} color="black" />
        </View>
        <View>
          <Text style={styles.text}>
            {""} Age: <Text style={styles.anstext}>{Age}</Text>
          </Text>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.icon}>
          <MaterialCommunityIcons name="highway" size={24} color="black" />
        </View>
        <View>
          <Text style={styles.text}>
            Street: <Text style={styles.anstext}>{Street}</Text>
          </Text>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.icon}>
          <MaterialCommunityIcons name="city-variant" size={24} color="black" />
        </View>
        <View>
          <Text style={styles.text}>
            City: <Text style={styles.anstext}>{City}</Text>
          </Text>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.icon}>
          <MaterialIcons name="local-post-office" size={24} color="black" />
        </View>
        <View>
          <Text style={styles.text}>
            Postcode: <Text style={styles.anstext}>{Postcode}</Text>
          </Text>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.icon}>
          <Entypo name="email" size={24} color="black" />
        </View>
        <View>
          <Text style={styles.text}>
            Email: <Text style={styles.anstext}>{Email}</Text>
          </Text>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.icon}>
          <Entypo name="phone" size={24} color="black" />
        </View>

        <View>
          <Text style={styles.text}>
            Phone: <Text style={styles.anstext}>{Phone}</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignSelf: "flex-start",
    marginHorizontal: 27,
    marginVertical: 44,
    flexDirection: "column",
  },
  card: {
    flexDirection: "row",
  },
  icon: {
    padding: 3,
  },
  text: {
    opacity: 0.7,
    color: "#000",
    fontSize: 18,
    padding: 8,
    fontWeight: "bold",
  },
  anstext: {
    fontWeight: "bold",
    color: "#9C0C34",
  },
});

export default Card;
