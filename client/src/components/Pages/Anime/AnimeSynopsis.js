import { useContext } from "react";
import { AnimeContext } from "./AnimeContext";
import styled from "styled-components";

const AnimeSynopsis = () => {
  const { anime } = useContext(AnimeContext);

  return (
    <AnimeSysnopsisWrapper>
      <h2>Anime Synopsis</h2>
      <p>{anime.synopsis}</p>
    </AnimeSysnopsisWrapper>
  );
};
const AnimeSysnopsisWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  p {
    line-height: 1.2rem;
  }
`;
export default AnimeSynopsis;
