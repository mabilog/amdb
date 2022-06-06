import { useState, useEffect } from "react";
import styled from "styled-components";

import AnimeCard from "./AnimeCard";
import Spinner from "../Spinner";
const AnimeList = ({ animes, loading }) => {
  if (loading) return <Spinner />;
  return (
    <AnimeListWrapper>
      {animes ? (
        animes.map((anime) => <AnimeCard anime={anime} key={anime.mal_id} />)
      ) : (
        <Spinner />
      )}
    </AnimeListWrapper>
  );
};
const AnimeListWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default AnimeList;
