
//SPLASH SCREEN
//İCON


import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Button from "../components/Button";
import Card from "../components/Card";
import { ActivityIndicator } from "react-native-paper";
import axios from "axios";
import Header from "../components/Header";
import Icon from "../components/Icon";
const HomeScreen = ({ navigation }) => {
  const [result, setResult] = useState("");
  const [result2, setResult2] = useState("");
  const [loading, setLoading] = useState(true);
  const [picture, setPicture] = useState();
  const [age, setAge] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [postcode, setPostcode] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    getRandomUser();
  }, []);

  const getRandomUser = async () => {
    setLoading(true);

    const {
      data: { results },
    } = await axios.get("https://randomuser.me/api/");
    
    const {
      name: { first, last },
    } = results[0];
    const {
      picture: { large },
    } = results[0];

    const {
      location: {
        street: { name },
        city,
        postcode,
      },
    } = results[0];

    const { email } = results[0];

    const { phone } = results[0];

    const {
      dob: { age },
    } = results[0];

    setResult(first);
    setResult2(last);
    setLoading(false);
    setPicture(large);
    setStreet(name);
    setCity(city);
    setPostcode(postcode);
    setEmail(email);
    setPhone(phone);
    setAge(age);
  };

  return (
    <View style={styles.container}>
      <Header style={{backgroundColor:'#171C1B'}} icon={<Icon onPress={() => navigation.openDrawer()} />} backgroundColor={''} />
      <View style={styles.headLayer}>
        <View style={styles.headContainer}>
          {loading ? (
            <View style={styles.loading}>
              <ActivityIndicator animating={true} color="#fff" />
            </View>
          ) : (
            <View style={styles.pictureContainer}>
              <Image source={{ uri: picture }} style={styles.image} />
              {(result.toUpperCase() + result2.toUpperCase()).length > 14 ? (
                <View
                  style={{
                    flexDirection: "column",
                    marginVertical: 30,
                    marginLeft: 18,
                  }}
                >
                  <Text style={styles.longtext}>{result}</Text>
                  <Text style={styles.longtext}>{result2}</Text>
                </View>
              ) : (
                <Text style={styles.text}>
                  {result.toUpperCase()} {result2.toUpperCase()}
                </Text>
              )}
            </View>
          )}
        </View>
      </View>

      <View style={styles.footLayer}>
        <View style={styles.footContainer}>
          <Card
            Age={age}
            Street={street}
            City={city}
            Postcode={postcode}
            Email={email}
            Phone={phone}
          />
          <View style={styles.butContainer}>
            <Button title="CHANGE" onPress={() => getRandomUser()} />
          </View>
        </View>
      </View>
    </View>
  );
};
// #171C1B

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#171C1B'
  },
  loading: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 66,
    marginVertical: 60,
  },
  pictureContainer: {
    flexDirection: "row",
    marginHorizontal: 30,
    marginVertical: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 80,
  },
  text: {
    
    color: "#fff",
    fontSize: 25,
    alignSelf: "center",
    marginHorizontal: 20,
    fontWeight: "bold",
    letterSpacing: 0.4,
  },
  longtext: {
    
    color: "#fff",
    fontSize: 22,
    alignSelf: "center",
    fontWeight: "bold",
  },
  butContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "90%",
  },
  footContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    flexDirection: "column",
    borderTopLeftRadius: 70,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  headLayer: {
    height: "20%",
    backgroundColor: "white",
  },
  footLayer: {
    backgroundColor: "#171C1B",
  },
  headContainer: {
    width: "100%",
    borderBottomRightRadius: 70,
    backgroundColor: "#171C1B",
    height: "100%",
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
});

export default HomeScreen;
