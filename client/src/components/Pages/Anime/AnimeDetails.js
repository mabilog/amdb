import styled from "styled-components";
import AnimeScore from "./AnimeScore";
import AnimeTitle from "./AnimeTitle";
import AnimeVA from "./AnimeVA";

const AnimeDetails = () => {
  return (
    <AnimeDetailsWrapper>
      <AnimeTitle />
      <AnimeScore />
      <AnimeVA />
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
