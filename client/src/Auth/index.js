import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../GlobalContext";

const Auth = () => {
  const { setUserInfo } = useContext(GlobalContext);
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const navigate = useNavigate();

  const handleReload = () => {
    const user_id = user.sub.split("|")[1];
    fetch(`/dbApi/getUser/${user_id}`)
      .then((res) => res.json())
      .then((data) => setUserInfo(data.user));
  };

  useEffect(() => {
    if (isAuthenticated) handleReload();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  return user ? (
    <PPWrapper>
      <img
        src={user.picture}
        alt={user.name}
        onClick={() => navigate("/profile")}
      />
      <AuthWrapper onClick={() => logout()}>LogOut</AuthWrapper>
    </PPWrapper>
  ) : (
    <AuthWrapper onClick={() => loginWithRedirect()}>LogIn</AuthWrapper>
  );
};
const PPWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  position: relative;

  /* button {
    display: none;
    position: absolute;
    z-index: 3;
  } */

  img {
    width: 40px;
    border-radius: 50%;
    cursor: pointer;
  }

  /* &:hover {
    button {
      display: block;
    }
  } */
`;

const AuthWrapper = styled.button`
  all: unset;
  background-color: var(--primary);
  color: var(--white);
  font-size: 16px;
  font-weight: 600;
  padding: 16px 30px;
  border-radius: 50px;
  cursor: pointer;
`;

export default Auth;
