import { createContext, useEffect, useState } from "react";

export const MangaContext = createContext(null);

const MangaProvider = ({ children }) => {
  const [manga, setManga] = useState();

  return (
    <MangaContext.Provider value={{ manga }}>{children}</MangaContext.Provider>
  );
};

export default MangaProvider;
