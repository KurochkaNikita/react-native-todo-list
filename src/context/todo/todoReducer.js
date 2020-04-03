import {
  ADD_TODO,
  REMOVE_TODO,
  UPDATE_TODO,
  SHOW_LOADER,
  HIDE_LOADER,
  CLEAR_ERROR,
  SHOW_ERROR,
  FETCH_TODOS
} from "../type";

const handers = {
  [ADD_TODO]: (state, {title, id}) => ({
      ...state,
      todos: [
        ...state.todos,
        {id, title }
      ]
    }
  ),
  [REMOVE_TODO]: (state, {id}) => ({
    ...state,
    todos: state.todos.filter(todo => todo.id !== id)
  }),
  [UPDATE_TODO]: (state, {id, title}) => ({
    ...state,
    todos: state.todos.map(todo => {
      if (todo.id === id) {
        todo.title = title
      }
      return todo;
    })
  }),
  [SHOW_LOADER]: (state) => ({...state, isLoading: true}),
  [HIDE_LOADER]: (state) => ({...state, isLoading: false}),
  [SHOW_ERROR]: (state, {error}) => ({...state, error}),
  [CLEAR_ERROR]: (state) => ({...state, error: null}),
  [FETCH_TODOS]: (state, {todos}) => ({...state, todos}),
  DEFAULT: (state) => state
};

export const todoReducer = (state, action) => {
  const handler = handers[action.type] || handers["DEFAULT"];
  return handler(state, action);
};