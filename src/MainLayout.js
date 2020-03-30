import React, { useState, useContext } from 'react';
import {Alert, StyleSheet, View} from "react-native";
import {MainScreen} from "./screens/MainScreen";
import {TodoScreen} from "./screens/TodoScreen";
import {NavBar} from "./components/NavBar";
import {THEME} from "./theme";
import {TodoContext } from './context/todo/todoContext'

export const MainLayout = () => {
  const {todos, addTodo, updateTodo, removeTodo } = useContext(TodoContext)
  const [todoId, setTodoId] = useState(null);
  // const [todos, setTodos] = useState([]);

  // const addTodo = (title) => {
  //   setTodos((prevState) => [
  //     ...prevState, {
  //       id: Date.now().toString(),
  //       title,
  //     }
  //   ])
  // };
  //
  // const removeTodo = (id, title) => {
  //   Alert.alert(
  //     'Alert Title',
  //     `Do you want to delete ${title}?`,
  //     [
  //       {
  //         text: 'Cancel',
  //         style: 'cancel',
  //       },
  //       {
  //         text: 'Remove',
  //         onPress: () => {
  //           setTodoId(null);
  //           setTodo((prev) => prev.filter(todo => todo.id !== id))
  //         }
  //       },
  //     ],
  //     {cancelable: false},
  //   );
  // };
  //
  // const updateTodo = (id, title) => {
  //   setTodo(prevState => prevState.map(todo => {
  //     if (todo.id === id) {
  //       todo.title = title
  //     }
  //     return todo;
  //   }))
  // };

  let content = (
    <MainScreen
      todos={todos}
      removeTodo={removeTodo}
      addTodo={addTodo}
      onOpen={setTodoId}
    />
  );

  if (todoId) {
    const todo = todos.find(todo => todo.id === todoId);
    content = (
      <TodoScreen
        onSave={updateTodo}
        onRemove={removeTodo}
        goBack={() => setTodoId(null)}
        todo={todo}
      />
    )
  }

  return (
    <View>
      <NavBar title="Todo List!"/>
      <View style={styles.container}>
        {content}
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: THEME.PADDING_HORIZONTAL,
    paddingVertical: 20
  },
});
