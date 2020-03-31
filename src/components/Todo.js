import React, {useContext} from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import {AppText} from "../ui/AppText";
import {TodoContext} from "../context/todo/todoContext";
import {ScreenContext} from "../context/screens/screenContext";

export const Todo = ({title, id}) => {
  const { removeTodo } = useContext(TodoContext);
  const {changeScreen} = useContext(ScreenContext);

  return (
    <TouchableOpacity
      onLongPress={() => removeTodo(id, title)}
      onPress={() => changeScreen(id)}
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