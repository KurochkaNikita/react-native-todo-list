import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, Alert} from 'react-native';
import {NavBar} from "./src/components/NavBar";
import {MainScreen} from "./src/screens/MainScreen";
import {TodoScreen} from "./src/screens/TodoScreen";

export default function App() {
  const [todoId, setTodoId] = useState(null);
  const [todos, setTodo] = useState([]);

  const addTodo = (title) => {
    setTodo((prevState) => [
      ...todos, {
        id: Date.now().toString(),
        title,
      }
    ])
  };

  const removeTodo = (id, title) => {
    Alert.alert(
      'Alert Title',
      `Do you want to delete ${title}?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Remove',
          onPress: () => {
            setTodoId(null);
            setTodo((prev) => prev.filter(todo => todo.id !== id))
          }
        },
      ],
      {cancelable: false},
    );
  };

  const updateTodo = (id, title) => {
    setTodo(prevState => prevState.map(todo => {
      if (todo.id === id) {
        todo.title = title
      }
      return todo;
    }))
  };

  let content = <MainScreen todos={todos} removeTodo={removeTodo} addTodo={addTodo} onOpen={setTodoId}/>;

  if (todoId) {
    const todo = todos.find(todo => todo.id === todoId);
    content = <TodoScreen onSave={updateTodo} onRemove={removeTodo} goBack={() => setTodoId(null)} todo={todo}/>
  }

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
