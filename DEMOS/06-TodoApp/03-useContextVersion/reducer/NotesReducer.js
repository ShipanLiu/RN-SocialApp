//  其他组件 里面的useReducer就会把 initialState 和 reducer联系到一起。

import * as actions from '../actions/actions';
import uuid from 'react-native-uuid';

export const initialState = [];

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD:
      return [
        ...state,
        {
          id: uuid.v4(),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case actions.DELETE:
      return state.filter(item => item.id !== action.payload);
    case actions.EDIT:
      return state.map(item => {
        if (item.id === action.payload.id) {
          return action.payload;
        } else {
          return item;
        }
      });
    case actions.REFRESH:
      return action.payload;
    default:
      return state;
  }
};
