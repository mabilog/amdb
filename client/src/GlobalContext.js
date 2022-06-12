import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext(null);

const GlobalProvider = ({ children }) => {
  const [search, setSearch] = useState();
  const [searchInput, setSearchInput] = useState("");
  const [userInfo, setUserInfo] = useState();
  const [arrId, setArrId] = useState([]);

  useEffect(() => {
    if (userInfo) {
      setArrId(userInfo.favorites.map((anime) => anime.mal_id));
    }
  }, [userInfo]);

  return (
    <GlobalContext.Provider
      value={{
        search,
        setSearch,
        userInfo,
        setUserInfo,
        arrId,
        setArrId,
        searchInput,
        setSearchInput,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
