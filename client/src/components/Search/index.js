import styled from "styled-components";
import SearchAnime from "./SearchAnime";
import SearchManga from "./SearchManga";

const index = () => {
  return (
    <Wrapper>
      <SearchAnime />
      {/* <SearchManga /> */}
    </Wrapper>
  );
};
const Wrapper = styled.div``;

export default index;
