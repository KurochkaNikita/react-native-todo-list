import React, { useReducer } from 'react';
import { screenReducer } from "./screenReducer";
import { ScreenContext } from "./screenContext";
import {CHANGE_SCREEN} from "../type";

export const ScreenState = ({children}) => {
  const [ state, dispatch] = useReducer(screenReducer, null);

  const changeScreen = (id) => dispatch({type: CHANGE_SCREEN, payload: id});

  return (
    <ScreenContext.Provider
      value={{
        todoId: state,
        changeScreen
      }}
    >
      {children}
    </ScreenContext.Provider>
  )
}