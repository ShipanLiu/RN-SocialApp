import React, {createContext, useReducer} from 'react';

import {reducer as NotesReducer, initialState} from '../reducer/NotesReducer';

export const NotesContext = createContext();

// 产生state，产生dispatch

export const NotesProvider = ({children}) => {
  const [state, dispatch] = useReducer(NotesReducer, initialState);
  return (
    // value把state和dispatch传出去。
    <NotesContext.Provider value={{state: state, dispatch: dispatch}}>
      {children}
    </NotesContext.Provider>
  );
};
