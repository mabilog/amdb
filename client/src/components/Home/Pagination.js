import React from "react";
import styled from "styled-components";
const Pagination = ({ postsPerPage, totalPost, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPost / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationWrapper>
      <PageList>
        {pageNumbers.map((number) => {
          return (
            <List key={number}>
              <PageNumber
                onClick={() => paginate(number)}
                selected={currentPage === number}
              >
                {number}
              </PageNumber>
            </List>
          );
        })}
      </PageList>
    </PaginationWrapper>
  );
};

const PaginationWrapper = styled.div`
  display: flex;
`;

const PageList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const List = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1/1;
  width: 20px;
`;

const PageNumber = styled.button`
  background-color: var(--dark);
  border: 1px solid var(--gray);
  font-size: 16px;
  padding: 5px;

  color: var(--white);
  cursor: pointer;
  &selected {
    background-color: var(--primary);
  }
`;
export default Pagination;
