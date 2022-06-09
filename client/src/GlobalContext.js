import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

const GlobalProvider = ({ children }) => {
  const [search, setSearch] = useState();
  const [userInfo, setUserInfo] = useState();

  return (
    <GlobalContext.Provider
      value={{
        search,
        setSearch,
        userInfo,
        setUserInfo,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
