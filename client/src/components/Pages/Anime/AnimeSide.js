import { useContext } from "react";
import { AnimeContext } from "./AnimeContext";
import styled from "styled-components";

import AnimeInformation from "./AnimeInformation";
import AnimeStatistics from "./AnimeStatistics";
import AnimeAltTitle from "./AnimeAltTitle";
import { useAuth0 } from "@auth0/auth0-react";

import { GlobalContext } from "../../../GlobalContext";
const AnimeSide = () => {
  const { userInfo } = useContext(GlobalContext);
  const { anime } = useContext(AnimeContext);
  const { user } = useAuth0();

  const handleClick = () => {
    console.log(userInfo);
  };
  return (
    anime && (
      <AnimeSideWrapper>
        <img src={anime.images.jpg.large_image_url} alt={anime.title} />
        <Status></Status>
        {user && (
          <ButtonWrapper>
            <button onClick={() => handleClick()}>Add to Favorite</button>
          </ButtonWrapper>
        )}

        <AnimeAltTitle />
        <AnimeInformation />
        <AnimeStatistics />
        <div>
          <span></span>
        </div>
      </AnimeSideWrapper>
    )
  );
};

const AnimeSideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  div {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: 10px 0;

    a {
      text-decoration: none;
      color: var(--white);
    }
  }
  span {
    color: var(--light);
    font-weight: 600;
  }
  h2 {
    text-align: left;
    font-size: 18px;
    padding: 10px 0;
    margin-top: 10px;
    border-bottom: 1px solid var(--gray);
  }
`;
const Status = styled.div``;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    background-color: var(--primary);
    border: none;
    padding: 20px 40px;
    border-radius: 40px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
  }
`;
export default AnimeSide;
