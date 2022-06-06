import { useState, useEffect } from "react";

import styled from "styled-components";

// import AnimeCard from "./AnimeCard";
import AnimeList from "./AnimeList";
import Pagination from "../Pagination";

const Schedule = () => {
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

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
      setLoading(true);
      fetch(`/animeApi/getSchedule/${day}`)
        .then((res) => res.json())
        .then((data) => setAnimes(data.data.data))
        .then(() => setLoading(false));
    };
    fetchAnime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Get Current Post
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = animes.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <ScheduleWrapper>
      <TopWrapper>
        <h2>Today's Schedule</h2>
        <p>{day}</p>
      </TopWrapper>
      <BottomWrapper>
        <AnimeList animes={currentPost} loading={loading} />
        <Pagination
          postsPerPage={postsPerPage}
          totalPost={animes.length}
          paginate={paginate}
          currentPage={currentPage}
        />
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
  flex-direction: column;
  /* min-height: 300px; */
  gap: 5px;
`;

export default Schedule;
