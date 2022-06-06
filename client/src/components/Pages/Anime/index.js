import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Spinner from "../../Spinner";
import AnimeDetails from "./AnimeDetails";
import AnimeSide from "./AnimeSide";
const Anime = () => {
  const [anime, setAnime] = useState();
  const { mal_id } = useParams();

  useEffect(() => {
    fetch(`/animeApi/getAnime/${mal_id}`)
      .then((res) => res.json())
      .then((data) => {
        setAnime(data.anime.data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimeWrapper>
      {anime ? (
        <Middle>
          <AnimeSide anime={anime} />
          <AnimeDetails anime={anime} />
        </Middle>
      ) : (
        <Spinner />
      )}
    </AnimeWrapper>
  );
};

const AnimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  color: var(--white);
  font-size: 16px;
  font-weight: 400;
  width: 80%;
  max-width: 1500px;
  margin: 0 auto;
`;

const Top = styled.h1``;

const Middle = styled.div`
  display: grid;
  grid-template-columns: 33% 66%;
`;

const Center = styled.div``;
const Right = styled.div``;

export default Anime;
