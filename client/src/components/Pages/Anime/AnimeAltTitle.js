import { useContext } from "react";
import { AnimeContext } from "./AnimeContext";

const AnimeAltTitle = () => {
  const { anime } = useContext(AnimeContext);

  return (
    <>
      <h2>Alternative Title</h2>
      <div>
        <span>Japanese:</span>
        {anime.title}
      </div>
    </>
  );
};

export default AnimeAltTitle;
