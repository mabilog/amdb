import { useState, useEffect } from "react";

import styled from "styled-components";

// import AnimePagination from "./AnimePagination";
import AnimePagination from "../Cards/AnimePagination";

const Schedule = () => {
  const [animes, setAnimes] = useState([]);
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
    const fetchAnime = async () => {
      fetch(`/animeApi/getSchedule/${day}`)
        .then((res) => res.json())
        .then((data) => setAnimes(data.data.data));
    };
    fetchAnime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ScheduleWrapper>
      <TopWrapper>
        <h2>Today's Schedule</h2>
        <p>{day}</p>
      </TopWrapper>
      <AnimePagination animes={animes} type="anime" />
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

export default Schedule;
