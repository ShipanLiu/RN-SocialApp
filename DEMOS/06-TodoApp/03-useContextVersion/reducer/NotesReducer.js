//  其他组件 里面的useReducer就会把 initialState 和 reducer联系到一起。

import * as actions from '../actions/actions';

export const initialState = [];

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD:
      return [...state, {id: Math.random(), title: `tit${state.length + 1}`}];
    case actions.DELETE:
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
};
