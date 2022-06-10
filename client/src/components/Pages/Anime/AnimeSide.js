import { useContext, useState } from "react";
import { AnimeContext } from "./AnimeContext";
import styled from "styled-components";

import AnimeInformation from "./AnimeInformation";
import AnimeStatistics from "./AnimeStatistics";
import AnimeAltTitle from "./AnimeAltTitle";

import { GlobalContext } from "../../../GlobalContext";
import { useEffect } from "react";
const AnimeSide = () => {
  const { userInfo, setUserInfo } = useContext(GlobalContext);
  const { anime } = useContext(AnimeContext);
  const [arrId, setArrId] = useState([]);

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
        console.log(data.user);

        // setUserInfo(data.user);
      })
      .then(() => setArrId(userInfo.favorites.map((show) => show.mal_id)));
  };

  useEffect(() => {
    console.log(arrId);
  }, [arrId, userInfo]);

  const favArr = userInfo.favorites.map((show) => show.mal_id);
  // setArrId(favArr);
  return (
    anime && (
      <AnimeSideWrapper>
        <img src={anime.images.jpg.large_image_url} alt={anime.title} />
        <Status></Status>
        <ButtonWrapper>
          {/* {console.log(arrId)} */}
          {userInfo && arrId ? (
            <button
              onClick={handleToggle}
              active={arrId.includes(anime.mal_id)}
              // active={}
              // active={true}
            >
              toggle me baby
            </button>
          ) : null}
        </ButtonWrapper>

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
    &:active {
      background-color: green;
    }
  }
`;
export default AnimeSide;
