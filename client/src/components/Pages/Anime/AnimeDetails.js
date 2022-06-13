import styled from "styled-components";
import AnimeScore from "./AnimeScore";
import AnimeSynopsis from "./AnimeSynopsis";
import AnimeTitle from "./AnimeTitle";

const AnimeDetails = () => {
  return (
    <AnimeDetailsWrapper>
      <AnimeTitle />
      <AnimeScore />
      <AnimeSynopsis />
    </AnimeDetailsWrapper>
  );
};

const AnimeDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  h2 {
    font-size: 24px;
    color: var(--gray);
  }
`;

export default AnimeDetails;
