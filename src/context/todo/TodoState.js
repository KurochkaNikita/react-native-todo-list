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

export const TodoState = ({children}) => {
  const initialState = {
    todos: [],
    isLoading: false,
    error: null,
  };

  const {changeScreen} = useContext(ScreenContext);
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = async (title) => {
    const response = await fetch(`${BASIC_URL}todos.json`, {
      method: 'POST',
      headers: {'Context-Type': 'application/json'},
      body: JSON.stringify({title})
    });
    const {name: id} = await response.json;
    dispatch({type: ADD_TODO, title, id});
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
            await fetch(
              `${BASIC_URL}todos/${id}.json`,
              {
                method: 'DELETE',
                headers: {'Content-Type': 'application/json'},

              }
            );
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
      const response = await fetch(
        `${BASIC_URL}todos.json`,
        {
          method: 'GET',
          headers: {'Content-Type': 'application/json'}
        }
      );
      const data = await response.json();
      const todos = Object.keys(data).map(key => ({...data[key], id: key}));
      dispatch({type: FETCH_TODOS, todos});
    } catch (error) {
      showError('Please try again')
    } finally {
      hideLoader();
    }
  };

  const updateTodo = async (id, title) => {
    clearError();
    try {
      const response = await fetch(
        `${BASIC_URL}todos/${id}.json`,
        {
          method: 'PATCH',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({title})
        }
      );
      dispatch({type: UPDATE_TODO, id, title})
    } catch (e) {
      showError('Please try again')
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