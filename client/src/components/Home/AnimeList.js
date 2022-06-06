import styled from "styled-components";

import AnimeCard from "./AnimeCard";
import Spinner from "../Spinner";
const AnimeList = ({ animes, loading }) => {
  if (loading) return <Spinner />;
  return (
    <AnimeListWrapper>
      {animes?.map((anime) => (
        <AnimeCard anime={anime} key={anime.mal_id} />
      ))}
    </AnimeListWrapper>
  );
};
const AnimeListWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 10px auto;
`;
export default AnimeList;
