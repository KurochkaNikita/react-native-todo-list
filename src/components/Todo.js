import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import {AppText} from "../ui/AppText";

export const Todo = ({title, id, removeTodo, onOpen}) => {
  return (
    <TouchableOpacity
      onLongPress={() => removeTodo(id, title)}
      onPress={() => onOpen(id)}
    >
      <View style={styles.todo}>
        <AppText>{title}</AppText>
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
});