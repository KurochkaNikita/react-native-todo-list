import React, { useContext } from 'react';
import { StyleSheet, View} from "react-native";
import {MainScreen} from "./screens/MainScreen";
import {TodoScreen} from "./screens/TodoScreen";
import {NavBar} from "./components/NavBar";
import {THEME} from "./theme";
import {ScreenContext } from './context/screens/screenContext'

export const MainLayout = () => {
  const {todoId } = useContext(ScreenContext);

  return (
    <View style={styles.wrapper}>
      <NavBar title="Todo List!"/>
      <View style={styles.container}>
        {todoId ? <TodoScreen/> : <MainScreen/>}
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    flex: 1,
    paddingHorizontal: THEME.PADDING_HORIZONTAL,
    paddingVertical: 20
  },
});
