import { createContext, useEffect, useState } from "react";

export const HomeContext = createContext(null);

const HomeProvider = ({ children }) => {
  return <HomeContext.Provider value={{}}>{children}</HomeContext.Provider>;
};

export default HomeProvider;
