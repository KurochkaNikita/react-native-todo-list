import React, { useContext } from 'react';
import {Alert, StyleSheet, View} from "react-native";
import {MainScreen} from "./screens/MainScreen";
import {TodoScreen} from "./screens/TodoScreen";
import {NavBar} from "./components/NavBar";
import {THEME} from "./theme";
import {ScreenContext } from './context/screens/screenContext'

export const MainLayout = () => {
  const {todoId} = useContext(ScreenContext);

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

  return (
    <View>
      <NavBar title="Todo List!"/>
      <View style={styles.container}>
        {todoId ? <TodoScreen/> : <MainScreen/>}
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
