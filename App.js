import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavBar } from "./src/components/NavBar";
import {AddTodo} from "./src/components/AddTodo";
import {Todo} from "./src/components/Todo";

export default function App() {
  const [ todo, setTodo ] = useState([]);

  const addTodo = (title) => {
    setTodo((prevState)=> [
      ...todo, {
        id: Date.now().toString(),
        title,
      }
    ])
  };

  return (
    <View>
      <NavBar title="Todo List!"/>
      <View style={styles.container}>
      <AddTodo onSubmit={addTodo}/>

      <View>

        {todo.map(({title, id}) => (
          <Todo title={title} key={id} id={id}/>
        ))}
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  },
  text: {
    fontSize: 20,
  }
});
