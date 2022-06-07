import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const AnimeContext = createContext(null);

const AnimeProvider = ({ children }) => {
  const [anime, setAnime] = useState();
  const [voiceActors, setVoiceActors] = useState();

  const { mal_id } = useParams();

  useEffect(() => {
    // fetching anime info
    fetch(`/animeApi/getAnime/${mal_id}`, {
      method: "GET",
      mode: "no-cors",
      credentials: "same-origin",
    })
      .then((res) => res.json())
      .then((data) => setAnime(data.anime.data));

    // fetching VA info
    fetch(`/animeApi/getAnime/${mal_id}/characters`)
      .then((res) => res.json())
      .then((data) => setVoiceActors(data.queryData.data.slice(0, 6)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimeContext.Provider
      value={{
        anime,
        voiceActors,
      }}
    >
      {children}
    </AnimeContext.Provider>
  );
};

export default AnimeProvider;
