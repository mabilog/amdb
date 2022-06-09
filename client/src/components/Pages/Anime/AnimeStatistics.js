import { useContext } from "react";
import { AnimeContext } from "./AnimeContext";

const AnimeStatistics = () => {
  const { anime } = useContext(AnimeContext);

  return (
    <>
      <h2>Statistics</h2>
      <div>
        <span>Score: </span> {anime.score} (scored by {anime.scored_by})
      </div>
      <div>
        <span>Ranked: </span> #{anime.rank}
      </div>
      <div>
        <span>Popularity: </span>#{anime.popularity}
      </div>
      <div>
        <span>Members: </span> {anime.members}
      </div>
      <div>
        <span>Favorites:</span> {anime.favorites}
      </div>
    </>
  );
};

export default AnimeStatistics;
