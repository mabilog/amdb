import React from "react";
import styled from "styled-components";
const Pagination = ({ postsPerPage, totalPost, paginate }) => {
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
              <PageNumber href="!#" onClick={() => paginate(number)}>
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
`;

const List = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: 
  aspect-ratio: 1/1;
  width: 20px;
`;

const PageNumber = styled.button`
  text-decoration: none;
  color: var(--white);
`;
export default Pagination;
