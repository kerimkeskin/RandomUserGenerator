import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import Header from "../components/Header";
import Icon from "../components/Icon";
import { AntDesign } from "@expo/vector-icons";
import * as Linking from "expo-linking";

const AboutScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header icon={<Icon onPress={() => navigation.openDrawer()} />} />
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/image/user.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.headtextContainer}>
        <Text style={styles.headtext}>INTRODUCTİON</Text>
      </View>
      <View style={styles.foottextContainer}>
        <Text style={styles.foottext}>
          Rather than "User 1", "User 2", etc., you can generate random data
          that gives it a more realistic preview to how your product will look
          in a production environment.
        </Text>
      </View>
      <View style={styles.copyright}>
        <Text style={styles.copyrightText}>© DESIGNED BY KERİM KESKİN</Text>
        <View style={styles.icon}>
          <AntDesign
            name="github"
            size={26}
            color="white"
            onPress={() => Linking.openURL("https://github.com/kerimkeskin")}
          />
        </View>
      </View>
    </View>
  );
};
// #171C1B

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#800A2B",
  },
  imageContainer: {
    alignItems: "center",
    paddingTop: 30,
  },
  image: {
    borderRadius: 340,
    width: 140,
    height: 140,
  },
  textContainer: {
    marginTop: 20,
  },
  headtextContainer: {
    margin: 30,
  },
  headtext: {
    color: "#fff",
    fontSize: 27,
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 2,
  },
  foottextContainer: {
    marginHorizontal: 12,
  },
  foottext: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 1,
  },
  copyright: {
    paddingTop: 50,
    flexDirection: "column",
    alignItems: "center",
  },
  copyrightText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 1,
  },
  icon: {
    margin: 15,
  },
});

export default AboutScreen;

/**
 
Rather than  "User 1", "User 2", etc., you can generate random data that   gives it a more realistic preview to how your product will look in a production environment.

 */

/**
  
"Kullanıcı 1", "Kullanıcı 2" vb. Yerine, ürününüzün bir üretim ortamında nasıl görüneceğine dair daha gerçekçi bir önizleme sağlayan rastgele veriler oluşturabilirsiniz.


  */
