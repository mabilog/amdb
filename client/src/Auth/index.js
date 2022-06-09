import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const navigate = useNavigate();
  return isAuthenticated ? (
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

const PPWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 40px;
    border-radius: 50%;
  }
`;
export default Auth;
