import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import AnimeDetails from "./AnimeDetails";
const Anime = () => {
  const [anime, setAnime] = useState();
  const { mal_id } = useParams();

  console.log(anime);
  useEffect(() => {
    // console.log(mal_id)
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
        <>
          <Top>{anime.title_english}</Top>
          <Middle>
            <AnimeDetails anime={anime} />
            <Center></Center>
            <Right></Right>
          </Middle>
        </>
      ) : null}
    </AnimeWrapper>
  );
};

const AnimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--white);
  font-size: 16px;
  font-weight: 400;
`;

const Top = styled.h1``;

const Middle = styled.div``;

const Center = styled.div``;
const Right = styled.div``;

export default Anime;
