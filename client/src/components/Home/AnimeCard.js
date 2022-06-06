import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const AnimeCard = ({ anime }) => {
  return (
    <AnimeCardWrapper>
      <Link to={`/anime/${anime.mal_id}/`}>
        <Title>{anime.title}</Title>
        <Image src={anime.images.jpg.image_url} alt={anime.title} />
      </Link>
    </AnimeCardWrapper>
  );
};

const AnimeCardWrapper = styled.div`
  position: relative;
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */
  width: 150px;
`;

const Title = styled.h3`
  display: block;
  position: absolute;
  bottom: 0;
  font-size: 12px;
`;

const Image = styled.img`
  width: 150px;
  &:hover {
    opacity: 0.4;
  }
`;
export default AnimeCard;
