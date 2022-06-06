import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const AnimeCard = ({ anime }) => {
  return (
    <AnimeCardWrapper>
      <Link to={`/anime/${anime.mal_id}`}>
        <Title>{anime.title}</Title>
        <Image src={anime.images.jpg.image_url} alt={anime.title} />
      </Link>
    </AnimeCardWrapper>
  );
};

// const AnimeCardWrapper = styled(Link)`
const AnimeCardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* text-decoration: none;
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
  } */
`;

const Title = styled.h3`
  display: block;
  position: relative;
  bottom: 0;
  font-size: 12px;
`;

const Image = styled.img`
  width: 150px;
`;
export default AnimeCard;
