import { useState, useEffect } from "react";
import styled from "styled-components";
import Loading from "../Anime/Loading";
import Titles from "../../Titles";
const Seasonal = () => {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    const fetchAnime = async () => {
      fetch(`/animeApi/getCurrentSeason`)
        .then((res) => res.json())
        .then((data) => {
          setAnimes(data.data.data);
        });
    };
    fetchAnime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <SeasonalWrapper>
      <Title>
        <h2>Seasonal Animes</h2>
      </Title>
      <Animes>
        {animes ? (
          animes.map((anime) => <Titles anime={anime} key={anime.mal_id} />)
        ) : (
          <Loading />
        )}
      </Animes>
    </SeasonalWrapper>
  );
};

const SeasonalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
  width: 100%;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  p:first-letter {
    text-transform: uppercase;
  }
`;

const Animes = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
`;

export default Seasonal;
