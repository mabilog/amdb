import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { GlobalContext } from "../../../GlobalContext";

import Titles from "../../Titles";
import Loading from "../Anime/Loading";

const SearchAnime = () => {
  const { search } = useContext(GlobalContext);
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    fetch(`/animeApi/getAnimeSearch/${search}`)
      .then((res) => res.json())
      .then((data) => setAnimes(data.animes.data));
  }, [search]);

  return (
    <SearchAnimeWrapper>
      <Title>
        <h2>Search</h2>
      </Title>
      <Animes>
        {animes ? (
          animes.map((anime) => <Titles anime={anime} key={anime.mal_id} />)
        ) : (
          <Loading />
        )}
      </Animes>
    </SearchAnimeWrapper>
  );
};

const SearchAnimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
  width: 100%;
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  p:first-letter {
    text-transform: uppercase;
  }
`;

const Animes = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
`;
export default SearchAnime;
