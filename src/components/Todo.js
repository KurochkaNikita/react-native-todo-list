import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export const Todo = ({title, id, removeTodo, onOpen}) => {
  return (
    <TouchableOpacity
      onLongPress={() => removeTodo(id, title)}
      onPress={() => onOpen(id)}
    >
      <View style={styles.todo}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>)
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 2,
    borderColor: '#eee',
    borderRadius: 5,
    marginBottom: 15
  },
  title: {
    //
    // NEED To FIX ISSUE WITH DOWNLOAD FontFamily
    //
    // fontFamily: 'roboto-bold'
  }
});