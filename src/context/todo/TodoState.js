import React, {useContext, useReducer} from 'react';
import {Alert} from 'react-native';
import {TodoContext} from "./todoContext";
import {todoReducer} from "./todoReducer";
import {
  UPDATE_TODO,
  ADD_TODO,
  REMOVE_TODO,
  SHOW_LOADER,
  HIDE_LOADER,
  FETCH_TODOS,
  SHOW_ERROR,
  CLEAR_ERROR
} from "../type";
import {ScreenContext} from "../screens/screenContext";
import {BASIC_URL} from "../../constants/fetch";
import {Http} from "../../http";

export const TodoState = ({children}) => {
  const initialState = {
    todos: [],
    isLoading: false,
    error: null,
  };

  const {changeScreen} = useContext(ScreenContext);
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = async (title) => {
    clearError()
    try {
      const {name: id} = await Http.post(`${BASIC_URL}todos.json`, {title})
      dispatch({type: ADD_TODO, title, id});
    } catch (err) {
      showError(err)
    }
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
          onPress: async () => {
            changeScreen(null);
            await Http.delete(`${BASIC_URL}todos/${id}.json`)
            dispatch({type: REMOVE_TODO, id: todo.id})
          }
        },
      ],
      {cancelable: false},
    );
  };

  const fetchTodos = async () => {
    showLoader();
    clearError();
    try {
      const data = await Http.get(`${BASIC_URL}todos.json`)
      console.log()
      const todos = Object.keys(data).map(key => ({...data[key], id: key}));
      dispatch({type: FETCH_TODOS, todos});
    } catch (err) {
      showError(err)
    } finally {
      hideLoader();
    }
  };

  const updateTodo = async (id, title) => {
    clearError();
    try {
      await Http.patch(`${BASIC_URL}todos/${id}.json`, {title})
      dispatch({type: UPDATE_TODO, id, title})
    } catch (err) {
      showError(err)
    }
  };

  const showLoader = () => dispatch({type: SHOW_LOADER})

  const hideLoader = () => dispatch({type: HIDE_LOADER})

  const showError = error => dispatch({type: SHOW_ERROR, error})

  const clearError = () => dispatch({type: CLEAR_ERROR})

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        isLoading: state.isLoading,
        error: state.error,
        addTodo,
        removeTodo,
        updateTodo,
        fetchTodos
      }}
    >
      {children}
    </TodoContext.Provider>)
}