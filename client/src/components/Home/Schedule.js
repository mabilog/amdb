import { useState, useEffect } from "react";

import styled from "styled-components";
import AnimeCard from "./AnimeCard";

const Schedule = () => {
  const [animes, setAnimes] = useState();
  const weekday = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  const day = weekday[new Date().getDay()];

  useEffect(() => {
    fetch(`/animeApi/getSchedule/${day}`)
      .then((res) => res.json())
      .then((data) => setAnimes(data.data.data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log(animes);
  }, [animes]);

  return (
    <ScheduleWrapper>
      <TopWrapper>
        <h2>Today's Schedule</h2>
        <p>{day}</p>
      </TopWrapper>
      <BottomWrapper>
        {animes?.map((anime) => (
          <AnimeCard anime={anime} key={anime.mal_id} />
        ))}
      </BottomWrapper>
    </ScheduleWrapper>
  );
};

const ScheduleWrapper = styled.div``;

const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  border-bottom: 2px dotted var(--gray);
`;

const BottomWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;
export default Schedule;
