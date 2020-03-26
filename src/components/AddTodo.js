import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';

export const AddTodo = ({onSubmit}) => {
  const [title, setTitle ] = useState('');

  const pressHandler = () => {
    if(title){
      onSubmit(title);
      setTitle('')
    } else {
     //error
    }
  };

  return (
    <View style={style.block}>
      <TextInput
        value={title}
        style={style.input}
        onChangeText={setTitle}
        placeholder='Введите текст'
      />
      <Button title="Добавить" onPress={pressHandler}/>
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
    borderBottomColor: '#3949ab'
  }
});