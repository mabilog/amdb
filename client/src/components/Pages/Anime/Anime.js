import { useContext } from "react";
import styled from "styled-components";
import Spinner from "../../Spinner";
import AnimeDetails from "./AnimeDetails";
import AnimeSide from "./AnimeSide";
import { AnimeContext } from "./AnimeContext";
const Anime = () => {
  const { anime } = useContext(AnimeContext);

  return (
    <AnimeWrapper>
      {anime ? (
        <Middle>
          <AnimeSide anime={anime} />
          <AnimeDetails />
        </Middle>
      ) : (
        <Spinner />
      )}
    </AnimeWrapper>
  );
};

const AnimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--white);
  font-size: 16px;
  font-weight: 400;
  width: 80%;
  max-width: 1500px;
  margin: 0 auto;
`;

const Middle = styled.div`
  display: grid;
  grid-template-columns: 33% 66%;
  gap: 20px;
`;

export default Anime;
