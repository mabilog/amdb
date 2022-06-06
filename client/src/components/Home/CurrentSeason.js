import { useState, useEffect } from "react";
import styled from "styled-components";

import AnimeList from "./AnimeList";
import Pagination from "../Pagination";
const CurrentSeason = () => {
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchAnime = async () => {
      setLoading(true);
      fetch(`/animeApi/getCurrentSeason`)
        .then((res) => res.json())
        .then((data) => {
          setAnimes(data.data.data);
        })
        .then(() => setLoading(false));
    };
    fetchAnime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log(animes);

  // Get Current Post
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = animes.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <CurrentSeasonWrapper>
      <TopWrapper>
        <h2>Seasonal Animes</h2>
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
    </CurrentSeasonWrapper>
  );
};
const CurrentSeasonWrapper = styled.div``;

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
export default CurrentSeason;
