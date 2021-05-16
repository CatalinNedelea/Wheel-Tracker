import React, { useState} from "react";
import {
  ScrollView,
  View,
  Button,
  Text,
  TextInput,
  StyleSheet,
} from "react-native";
import { useDispatch } from "react-redux";
import Colors from "../constants/Colors";
import * as busesActions from "../store/buses-actions";

const NewBusScreen = (props) => {
  const [titleValue, setTitleValue] = useState("");
  const [programValue, setProgramValue] = useState("");

  const dispatch = useDispatch();

  const titleChangeHandler = (text) => {
    setTitleValue(text);
  };

  const programChangeHandler = (text) => {
    setProgramValue(text);
  };

  const saveBusHandler = () => {
    dispatch(busesActions.addBus(titleValue, programValue));
    props.navigation.goBack();
  };

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={titleChangeHandler}
          value={titleValue}
        />
        <Text style={styles.label}>Program</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={programChangeHandler}
          value={programValue}
          multiline={true}
          selectTextOnFocus={true}
        />
        <Button
          title="Save Bus"
          color={Colors.primary}
          onPress={saveBusHandler}
        />
      </View>
    </ScrollView>
  );
};

NewBusScreen.navigationOptions = {
  headerTitle: "Adauga un nou autobuz",
};

const styles = StyleSheet.create({
  form: {
    margin: 30,
  },
  label: {
    fontSize: 18,
    marginBottom: 15,
  },
  textInput: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2,
  },
});

export default NewBusScreen;
