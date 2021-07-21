import React, {createContext, useReducer} from 'react';

// actions
const onFetchProducts = dispatch => async para => {
  dispatch({
    type: 'FETCH_PRODUCTS',
    // payload: response.data,
    payload: para,
  });
};

//reducers to handle dispatched actions and Change State
const productReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

//Map actions , State and reducers with Context
const CreateProductContext = (reducer, actions, initialState) => {
  const ProductsContext = createContext();

  const ProductsProvider = ({children}) => {
    const [productState, dispatch] = useReducer(reducer, initialState);

    const boundActions = {};

    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      // 就是将status 和 actions 一起暴露出去
      <ProductsContext.Provider value={{productState, ...boundActions}}>
        {children}
      </ProductsContext.Provider>
    );
  };

  return {ProductsContext, ProductsProvider};
};

//Export Context for Consumer
export const {ProductsProvider, ProductsContext} = CreateProductContext(
  productReducer,
  {
    onFetchProducts,
  },
  {
    products: undefined,
  },
);
