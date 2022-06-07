import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const SearchContext = createContext(null);

const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState();
  const { searchQuery } = useParams();
  console.log(searchQuery);

  useEffect(() => {
    console.log("hello");
  }, []);
  return <SearchContext.Provider value={{}}>{children}</SearchContext.Provider>;
};

export default SearchProvider;
