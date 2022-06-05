import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const AnimeCard = ({ anime }) => {
  return (
    <AnimeCardWrapper
      image={anime.images.jpg.image_url}
      to={`/anime/${anime.mal_id}`}
    >
      {/* // <AnimeCardWrapper> */}
      <InfoWrapper>
        <h3>{anime.title}</h3>
      </InfoWrapper>
      {/* <img src={anime.images.jpg.image_url} alt="" srcset="" /> */}
    </AnimeCardWrapper>
  );
};

const AnimeCardWrapper = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  height: 300px;
  width: 225px;
  color: var(--purple);
  &:hover {
    div {
      display: block;
    }
  }
`;

const InfoWrapper = styled.div`
  display: none;
  /* width: 100%;
  height: 100%; */
  /* background-color: var(--dark); */
  background-size: cover;
  /* color: var(--purple); */
  /* opacity: 0.5; */
`;
export default AnimeCard;
