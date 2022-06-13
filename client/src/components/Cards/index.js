import styled from "styled-components";
import AnimePagination from "./AnimePagination";

const index = ({ animes, type }) => {
  return (
    <Wrapper>
      <AnimePagination animes={animes} type={type} />
    </Wrapper>
  );
};

const Wrapper = styled.div``;
export default index;
