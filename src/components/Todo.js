import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export const Todo = ({title, id, removeTodo}) => {
  return (
    <TouchableOpacity
      onLongPress={() => removeTodo(id)}
    >
      <View style={style.todo}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>)
};

const style = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 2,
    borderColor: '#eee',
    borderRadius: 5,
    marginBottom: 15
  }
});