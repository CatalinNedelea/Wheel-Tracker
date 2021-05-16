import * as React from "react";
import { TouchableOpacity } from "react-native";

import { DrawerActions, useNavigation } from "@react-navigation/native";
import { useCallback } from "react";
import {Text} from 'react-native'

export default function MenuIcon() {
  const navigation = useNavigation();

  const openDrawer = useCallback(() => {
    navigation.dispatch(DrawerActions.openDrawer());
  }, []);

  return (
    <TouchableOpacity onPress={openDrawer}>
      <Text style={{marginLeft: 15}}>MENU</Text>
    </TouchableOpacity>
  );
}
