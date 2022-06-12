import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Titles = ({ anime }) => {
  return (
    <TitlesWrapper to={`/anime/${anime.mal_id}`}>
      <img src={anime.images.jpg.image_url} alt={anime.title_english} />
      {/* <span>{anime.title_english}</span> */}
    </TitlesWrapper>
  );
};

const TitlesWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  max-height: 400px:
  max-width : 200px;

  img{
    max-width: 100%;
    max-height: 100%;
  }

  transition: 300ms ease;
  &:hover{
    transform : scale(1.1)
  }
`;
export default Titles;
