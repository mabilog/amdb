import { useState, useEffect } from "react";
import styled from "styled-components";
// import AnimePagination from "./AnimePagination";
import AnimePagination from "../Cards/AnimePagination";

const CurrentSeason = () => {
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
    <CurrentSeasonWrapper>
      <TopWrapper>
        <h2>Seasonal Animes</h2>
      </TopWrapper>
      {animes && <AnimePagination animes={animes} type="anime" />}
    </CurrentSeasonWrapper>
  );
};
const CurrentSeasonWrapper = styled.div`
  height: 100%;
`;

const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  border-bottom: 2px dotted var(--gray);
`;
export default CurrentSeason;
