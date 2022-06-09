import { createContext, useEffect, useState } from "react";

export const HomeContext = createContext(null);

const HomeProvider = ({ children }) => {
  const [currentSeasonAnime, setCurrentSeasonAnime] = useState();

  // useEffect(() => {
  //   fetch(`/animeApi/getCurrentSeason`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setCurrentSeasonAnime(data.data.data);
  //     });
  // }, []);
  return (
    <HomeContext.Provider
      value={{
        currentSeasonAnime,
        setCurrentSeasonAnime,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export default HomeProvider;
