import { useState, useEffect } from "react";
import styled from "styled-components";
import Loading from "../Anime/Loading";
import Titles from "../../Titles";
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
        .then((data) => {
          setAnimes(data.data.data);
        });
    };
    fetchAnime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ScheduleWrapper>
      <Title>
        <h2>Today's Schedule</h2>
        <p>{day}</p>
      </Title>
      <Animes>
        {animes ? (
          animes.map((anime) => <Titles anime={anime} key={anime.mal_id} />)
        ) : (
          <Loading />
        )}
      </Animes>
      {/* <Pagination pagination={pagination} /> */}
    </ScheduleWrapper>
  );
};

const ScheduleWrapper = styled.div`
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
  /* gap: 20px;
  height: 300px;
  width: 200px; */
`;
export default Schedule;
