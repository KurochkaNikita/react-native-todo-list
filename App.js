import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { NavBar } from "./src/components/NavBar";
import {MainScreen } from "./src/screens/MainScreen";
import {TodoScreen} from "./src/screens/TodoScreen";

export default function App() {
  const [ todoId, setTodoId ] = useState(null);
  const [ todos, setTodo ] = useState([]);

  const addTodo = (title) => {
    setTodo((prevState)=> [
      ...todos, {
        id: Date.now().toString(),
        title,
      }
    ])
  };

  const removeTodo = (id) => {
    setTodo((prev) => prev.filter(todo => todo.id !== id))
  }

  let content = <MainScreen todos={todos} removeTodo={removeTodo} addTodo={addTodo} onOpen={setTodoId}/>;

  if(todoId) {
    const todo = todos.find(todo => todo.id === todoId);
    content = <TodoScreen goBack={() => setTodoId(null)} todo={todo}/>
  }

  console.log('todoId', todoId)

  return (
    <View>
      <NavBar title="Todo List!"/>
      <View style={styles.container}>
        {content}
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
