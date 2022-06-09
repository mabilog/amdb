import { useContext } from "react";
import styled from "styled-components";
import AnimeDetails from "./AnimeDetails";
import AnimeSide from "./AnimeSide";
import { AnimeContext } from "./AnimeContext";

import { useAuth0 } from "@auth0/auth0-react";
const Anime = () => {
  const { anime } = useContext(AnimeContext);

  const { user } = useAuth0();
  if (user) console.log(user);
  return (
    <AnimeWrapper>
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
