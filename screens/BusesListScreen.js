import React, { useEffect } from "react";
import { StyleSheet, Platform, FlatList } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";
import * as busesActions from "../store/buses-actions";
import HeaderButton from "../components/HeaderButton";
import BusItem from "../components/BusItem";
import { useNavigation } from "@react-navigation/native";
import MenuIcon from "../components/MenuIcon";

const BusesListScreen = (props) => {
  const buses = useSelector((state) => state.buses.buses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(busesActions.loadBuses());
  }, [dispatch]);

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: (props) => <MenuIcon />,
    });
  });

  return (
    <FlatList
      data={buses}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <BusItem
          title={itemData.item.title}
          program={itemData.item.program}
          onSelect={() => {
            props.navigation.navigate("DBus", {
              busTitle: itemData.item.title,
              busId: itemData.item.id,
            });
          }}
        />
      )}
    />
  );
};

BusesListScreen.navigationOptions = (navData) => {
  return {
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Adauga un nou autobuz"
          iconName={Platform.OS === "android" ? "md-add" : "ios-add"}
          onPress={() => {
            navData.navigation.navigate("NewBus");
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({});

export default BusesListScreen;
