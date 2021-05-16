import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const BusItem = props => {
  return (
    <TouchableOpacity onPress={props.onSelect} style={styles.busItem}>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  busItem: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center'
  },
  infoContainer: {
    marginLeft: 25,
    width: 250,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  title: {
    color: 'black',
    fontSize: 18,
    marginBottom: 5
  }
});

export default BusItem;
