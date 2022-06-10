import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const AnimeContext = createContext(null);

const AnimeProvider = ({ children }) => {
  const [anime, setAnime] = useState();
  const [loading, setLoading] = useState(false);
  const { mal_id } = useParams();

  useEffect(() => {
    // fetching anime info
    setLoading(true);
    fetch(`/animeApi/getAnime/${mal_id}`)
      .then((res) => res.json())
      .then((data) => setAnime(data.anime.data))
      .then(() => setLoading(false));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log(anime);

  return (
    <AnimeContext.Provider
      value={{
        anime,
        setAnime,
        loading,
        setLoading,
      }}
    >
      {children}
    </AnimeContext.Provider>
  );
};

export default AnimeProvider;
