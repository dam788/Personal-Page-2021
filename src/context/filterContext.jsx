import React, { createContext, useReducer } from 'react';
export const FilterContext = createContext();

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case 'addFilter':
      return [...state, action.filter];
    case 'removeFilter':
      state = state.filter((name) => name !== action.filter);
      return state;
    default:
      return state;
  }
};

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <FilterContext.Provider
        value={{
          state,
          dispatch,
        }}
      >
        {children}
      </FilterContext.Provider>
    </>
  );
};
