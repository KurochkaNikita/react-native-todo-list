import React, {useContext, useReducer} from 'react';
import {Alert} from 'react-native';
import {TodoContext} from "./todoContext";
import {todoReducer} from "./todoReducer";
import {UPDATE_TODO, ADD_TODO, REMOVE_TODO} from "../type";
import {ScreenContext} from "../screens/screenContext";

export const TodoState = ({children}) => {
  const initialState = {
    todos: [{id: '1', title: 'asd'}]
  };

  const {changeScreen} = useContext(ScreenContext);

  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (title) => {
    dispatch({type: ADD_TODO, title});
  };
  const removeTodo = (id) => {
      const todo = state.todos.find((t) => t.id === id);
      Alert.alert(
        'Alert Title',
        `Do you want to delete ${todo.title}?`,
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Remove',
            style: 'destructive',
            onPress: () => {
              changeScreen(null)
              dispatch({type: REMOVE_TODO, id: todo.id})
            }
          },
        ],
        {cancelable: false},
      );
  };

  const updateTodo = (id, title) => dispatch({type: UPDATE_TODO, id, title});

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        addTodo,
        removeTodo,
        updateTodo
      }}
    >
      {children}
    </TodoContext.Provider>)
}