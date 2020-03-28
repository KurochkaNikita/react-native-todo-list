import React, {useState} from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import * as Font from 'expo-font'
import { AppLoading } from 'expo'

import {NavBar} from "./src/components/NavBar";
import {MainScreen} from "./src/screens/MainScreen";
import {TodoScreen} from "./src/screens/TodoScreen";

async function loadApplication() {
  await Font.loadAsync({
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
  })
}

export default function App() {
  const [isReady, setIsReady] = useState(false)
  const [todoId, setTodoId] = useState(null);
  const [todos, setTodo] = useState([
    { id: '1', title: 'Выучить React Native' }
  ]);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onError={console.warn}
        onFinish={() => setIsReady(true)}
      />
    )
  }

  const addTodo = (title) => {
    setTodo((prevState) => [
      ...prevState, {
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
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  },
});
