import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
const Anime = () => {
  const [anime, setAnime] = useState();

  const { mal_id } = useParams();
  useEffect(() => {
    // console.log(mal_id)
    fetch(`/animeApi/getAnime/${mal_id}`)
      .then((res) => res.json())
      .then((data) => setAnime(data.data.data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimeWrapper>
      <Left></Left>
      <Center></Center>
      <Right></Right>
    </AnimeWrapper>
  );
};

const AnimeWrapper = styled.div`
  display: flex;
`;

const Left = styled.div``;
const Center = styled.div``;
const Right = styled.div``;

export default Anime;
