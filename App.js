import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
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

  const removeTodo = (id) => {
    setTodo((prev) => prev.filter(todo => todo.id !== id))
  }

  return (
    <View>
      <NavBar title="Todo List!"/>
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo}/>
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={todo}
          contentContainerStyle={{paddingBottom: 200}} // fixing issue with showing last items
          renderItem={({item: {title, id}}) => (
            <Todo title={title} id={id} removeTodo={removeTodo}/>
          )}
        />
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
