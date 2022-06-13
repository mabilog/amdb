import { useContext } from "react";
import { AnimeContext } from "./AnimeContext";
import styled from "styled-components";

import AnimeInformation from "./AnimeInformation";
import AnimeStatistics from "./AnimeStatistics";
import AnimeAltTitle from "./AnimeAltTitle";

import { GlobalContext } from "../../../GlobalContext";
import { useAuth0 } from "@auth0/auth0-react";

const AnimeSide = () => {
  const { userInfo, setUserInfo, arrId } = useContext(GlobalContext);
  const { user } = useAuth0();
  const { anime } = useContext(AnimeContext);
  // console.log(user);
  console.log(userInfo);

  const handleToggle = (e) => {
    e.preventDefault();
    const body = {
      user_id: userInfo._id,
      anime: anime,
    };
    fetch(`/dbApi/toggleFavorite/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        setUserInfo(data.user);
      });
  };

  const ButtonThing = () => {
    return arrId.includes(anime.mal_id) ? (
      <Button onClick={handleToggle} includes={true}>
        Remove from favorites
      </Button>
    ) : (
      <Button onClick={handleToggle} includes={false}>
        Add to favorites
      </Button>
    );
  };

  return (
    anime && (
      <AnimeSideWrapper>
        <img src={anime.images.jpg.large_image_url} alt={anime.title} />

        <ButtonWrapper>{user ? <ButtonThing /> : null}</ButtonWrapper>

        <AnimeAltTitle />
        <AnimeInformation />
        <AnimeStatistics />
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

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  background-color: var(--primary);
  border: none;
  padding: 20px 40px;
  border-radius: 40px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  opacity: ${(props) => (props.includes ? 0.5 : 1)};
`;
export default AnimeSide;
