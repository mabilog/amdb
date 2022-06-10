import { useEffect, useState } from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

import Cards from "../../Cards";
import { useContext } from "react";
import { GlobalContext } from "../../../GlobalContext";
const Profile = () => {
  const { userInfo, setUserInfo } = useContext(GlobalContext);
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
        <h2>Favorites</h2>
        {favAnime ? (
          <Cards animes={favAnime} type="anime" />
        ) : (
          <div>Loading</div>
        )}
      </FavoritesWrapper>
    </ProfileWrapper>
  ) : (
    <ProfileWrapper>Not authenticated</ProfileWrapper>
  );
};

const ProfileWrapper = styled.div`
  height: 100%;
`;
const TopWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  width: 70%;
  max-width: 1000px;
  align-items: center;
  justify-content: space-around;
  img {
    border-radius: 50%;
  }
`;

const Left = styled.div``;

const Right = styled.div``;

const FavoritesWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export default Profile;
