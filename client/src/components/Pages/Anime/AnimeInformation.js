import { useContext } from "react";
import { Link } from "react-router-dom";
import { AnimeContext } from "./AnimeContext";
const AnimeInformation = () => {
  const { anime } = useContext(AnimeContext);
  return (
    <>
      <h2>Information</h2>
      <div>
        <span>Type:</span>
        <p>{anime.type}</p>
      </div>
      <div>
        <span>Episodes:</span>
        {anime.episodes}
      </div>
      <div>
        <span>Status:</span>
        {anime.status}
      </div>
      <div>
        <span>Aired:</span>
        {anime.aired.string}
      </div>
      <div>
        <span>Premiered:</span>
        <Link to={`/anime/season/${anime.year}/${anime.season}`}>
          {anime.season} {anime.year}
        </Link>
      </div>
      <div>
        <span>Broadcast:</span>
        {anime.broadcast.string}
      </div>

      <div>
        <span>Producers:</span>

        {anime.producers.map((producer) => {
          return (
            <a href={producer.url} key={producer.name}>
              {producer.name}
            </a>
          );
        })}
      </div>
      <div>
        <span>Licensors:</span>
        {anime.licensors.map((licensor) => {
          return (
            <a href={licensor.url} key={licensor.name}>
              {licensor.name}
            </a>
          );
        })}
      </div>
      <div>
        <span>Studios:</span>
        {anime.studios.map((studio) => {
          return (
            <a href={studio.url} key={studio.name}>
              {studio.name}
            </a>
          );
        })}
      </div>
      <div>
        <span>Source:</span>
        {anime.source}
      </div>
      <div>
        <span>Genres</span>
        {anime.genres.map((genre) => {
          return (
            <a href={genre.url} key={genre.name}>
              {genre.name}
            </a>
          );
        })}
      </div>
      <div>
        <span>Theme: </span>
        {anime.themes.map((theme) => {
          return (
            <a href={theme.url} key={theme.name}>
              {theme.name}
            </a>
          );
        })}
      </div>
      <div>
        <span>Duration:</span> {anime.duration}
      </div>
      <div>
        <span>Rating:</span> {anime.rating}
      </div>
    </>
  );
};

export default AnimeInformation;
