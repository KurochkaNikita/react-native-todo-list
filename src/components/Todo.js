import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Todo = ({title}) => {
  return <View style={style.todo}><Text>{title}</Text></View>
};

const style = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5,
    marginBottom: 15
  }
});