import { useContext } from "react";
import { AnimeContext } from "./AnimeContext";
import styled from "styled-components";
import { Link } from "react-router-dom";
const AnimeSide = () => {
  const { anime } = useContext(AnimeContext);

  return (
    <AnimeSideWrapper>
      <img src={anime.images.jpg.large_image_url} alt={anime.title} />
      <Status></Status>
      <div>
        <button>Add to Favorite</button>
      </div>

      <h2>Alternative Title</h2>
      <div>
        <span>Japanese:</span>
        {anime.title}
      </div>

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
      <div>
        <span></span>
      </div>
    </AnimeSideWrapper>
  );
};

const AnimeSideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  div {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: 10px 0;

    a {
      text-decoration: none;
      color: var(--white);
    }
  }
  span {
    color: var(--light);
    font-weight: 600;
  }
  h2 {
    text-align: left;
    font-size: 18px;
    padding: 10px 0;
    margin-top: 10px;
    border-bottom: 1px solid var(--gray);
  }
`;
const Status = styled.div``;

export default AnimeSide;
