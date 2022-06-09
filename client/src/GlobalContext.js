import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext(null);

const GlobalProvider = ({ children }) => {
  const [search, setSearch] = useState();

  return (
    <GlobalContext.Provider
      value={{
        search,
        setSearch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
