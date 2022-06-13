import { useEffect, useState } from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

import Titles from "../../Titles";
import Loading from "../Anime/Loading";
import { useContext } from "react";
import { GlobalContext } from "../../../GlobalContext";

const Profile = () => {
  const { setUserInfo } = useContext(GlobalContext);
  const { user } = useAuth0();
  const [favAnime, setFavAnime] = useState();

  const _id = user.sub.split("|")[1];

  useEffect(() => {
    fetch(`/dbApi/getUser/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setUserInfo(data.user);
        setFavAnime(data.user.favorites);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return user ? (
    <ProfileWrapper>
      <TopWrapper>
        <Left>
          <img src={user.picture} alt={user.name} />
        </Left>
        <Right>
          <h2>{user.nickname}</h2>
          <p>{user.email}</p>
        </Right>
      </TopWrapper>
      <FavoritesWrapper>
        <Title>
          <h2>Favorites</h2>
        </Title>
        <Animes>
          {favAnime ? (
            favAnime.map((anime) => <Titles anime={anime} key={anime.mal_id} />)
          ) : (
            <Loading />
          )}
        </Animes>
      </FavoritesWrapper>
    </ProfileWrapper>
  ) : (
    <ProfileWrapper>Not authenticated</ProfileWrapper>
  );
};

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  height: 100%;
  min-height: 80vh;
  gap: 20px;
`;
const TopWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  min-width: 70%;
  min-height: 100%;
  align-items: center;
  justify-content: space-around;
  img {
    border-radius: 50%;
  }
`;

const Left = styled.div`
  img {
    width: 50px;
  }
`;

const Right = styled.div``;

const FavoritesWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
export default Profile;
