import { useEffect, useState } from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const [userInfo, setUserInfo] = useState();
  const { isAuthenticated, user } = useAuth0();

  const _id = user.sub.split("|")[1];
  console.log(_id);

  useEffect(() => {
    fetch(`/dbApi/getUser/${_id}`)
      .then((res) => res.json())
      .then((data) => setUserInfo(data.user));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return user ? (
    <ProfileWrapper>{user.name}</ProfileWrapper>
  ) : (
    <ProfileWrapper>Not authenticated</ProfileWrapper>
  );
};

const ProfileWrapper = styled.div`
  height: 100%;
`;
export default Profile;
