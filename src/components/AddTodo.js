import React, {useContext, useState} from 'react';
import { View, StyleSheet, TextInput, Keyboard, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import {THEME} from "../theme";
import {TodoContext} from "../context/todo/todoContext";

export const AddTodo = () => {
  const { addTodo: onSubmit } = useContext(TodoContext);
  const [title, setTitle ] = useState('');

  const pressHandler = () => {
    if(title.trim()){
      onSubmit(title);
      setTitle('');
      Keyboard.dismiss();
    } else {
      Alert.alert('Поля не должно быть пустым!')
    }
  };

  return (
    <View style={style.block}>
      <TextInput
        value={title}
        style={style.input}
        onChangeText={setTitle}
        placeholder='Введите текст'
        autoCorrect={false}
      />
      <AntDesign.Button onPress={pressHandler} name='pluscircleo'>
        Add
      </AntDesign.Button>
    </View>
  )
};

const style = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
     alignItems: 'center',
    marginBottom: 15,
  },
  input: {
    padding: 10,
    width: '70%',
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: THEME.MAIN_COLOR
  }
});