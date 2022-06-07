import { useState } from "react";

import styled from "styled-components";

import AnimeList from "./AnimeList";
import Pagination from "./Pagination";

const AnimePagination = ({ animes }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = animes.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <AnimePaginationWrapper>
      <AnimeList animes={currentPost} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPost={animes.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </AnimePaginationWrapper>
  );
};
const AnimePaginationWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export default AnimePagination;
