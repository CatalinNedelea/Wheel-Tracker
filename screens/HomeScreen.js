import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, StyleSheet, Image } from "react-native";

import { View } from "../components/Themed";
import MenuIcon from "../components/MenuIcon";
import { useEffect } from "react";
import main from "../styles/main";

export default function DatabaseScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      showHeader: true,
      headerLeft: (props) => <MenuIcon />,
    });
  });

  return (
    <View style={main.centered}>
      <Text
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)"
        style={styles.title}
      >
        Wheel-Tracker
      </Text>
      <View style={styles.imageContainer}>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={require("../styles/bus-logo.jpg")}
        />
      </View>
      <Text
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)"
        style={styles.footer}
      >
        Have a safe ride!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 2,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 40,
  },
  footer: {
    fontSize: 25,
  },
});
