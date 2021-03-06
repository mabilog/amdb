import { useContext } from "react";
import styled from "styled-components";
import AnimeDetails from "./AnimeDetails";
import AnimeSide from "./AnimeSide";
import { AnimeContext } from "./AnimeContext";
import Loading from "./Loading";
import BackBtn from "../../BackButton";

const Anime = () => {
  const { anime, loading } = useContext(AnimeContext);

  if (loading) return <Loading />;
  return (
    <AnimeWrapper>
      <BackBtn />
      {anime && (
        <Middle>
          <AnimeSide />
          <AnimeDetails />
        </Middle>
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
