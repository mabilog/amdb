import { createContext, useEffect, useReducer, useState } from "react";

export const GlobalContext = createContext(null);

const initialState = {
  greeting: "hello",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "change-greeting": {
      return {
        ...state,
        greeting: action.greeting,
      };
    }
    default:
      throw new Error("Something went wrong");
  }
};

const GlobalProvider = ({ children }) => {
  const [search, setSearch] = useState();
  const [searchResult, setSearchResult] = useState();
  const [state, dispatch] = useReducer(reducer, initialState);

  // useEffect();
  const changeGreeting = (data) => {
    dispatch({ type: "change-greeting", data });
  };

  return (
    <GlobalContext.Provider
      value={{
        state,
        actions: {
          changeGreeting,
        },
        search,
        setSearch,
        searchResult,
        setSearchResult,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
