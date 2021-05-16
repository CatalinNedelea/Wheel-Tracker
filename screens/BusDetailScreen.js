import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

const BusDetailScreen = (props) => {
  const busId = props.navigation.getParam("busId");

  const selectedBus = useSelector((state) =>
    state.buses.buses.find((bus) => bus.id === busId)
  );

  return (
    <ScrollView contentContainerStyle={{ alignItems: "center" }}>
      <View style={styles.programContainer}>
        <Text style={styles.program}>{selectedBus.program}</Text>
      </View>
    </ScrollView>
  );
};

BusDetailScreen.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navigation.getParam("busTitle"),
  };
};

const styles = StyleSheet.create({
  programContainer: {
    marginVertical: 60,
    width: "80%",
    maxWidth: 350,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 50,
  },
  program: {
    color: "black",
    textAlign: "center",
    fontSize: 25,
  },
});

export default BusDetailScreen;
