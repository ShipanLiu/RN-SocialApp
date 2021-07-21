import React, {createContext, useReducer, useState, useEffect} from 'react';

// actions part
const onImageChanged = dispatch => async params => {
  // we will perform some Web request here
  dispatch({
    type: 'IMAGE_CHANGED',
    payload: params,
  });
};

const getNewImage = path => {
  return {
    id: Date.now(),
    path: path,
  };
};

// reducer Part
// reducers to handle Dispatched Actions
const myReducer = (state, action) => {
  switch (action.type) {
    case 'IMAGE_CHANGED':
      return {
        ...state,
        image: [...state.image, action.payload],
      };
    default:
      return state;
  }
};

// 产生的Provider 给App.js 进去。 Context 被组件使用
// Map Actions, State and Reducer for Consumer Components
const CreateUserContext = (reducer, actions, initialState) => {
  const UserContext = createContext();

  const UserProvider = ({children}) => {
    const [userState, dispatch] = useReducer(reducer, initialState);

    const boundActions = {};

    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <UserContext.Provider value={{userState, ...boundActions}}>
        {children}
      </UserContext.Provider>
    );
  };

  return {UserContext, UserProvider};
};

export const {UserProvider, UserContext} = CreateUserContext(
  myReducer,
  {
    onImageChanged,
  },
  {
    image: [],
  },
);
