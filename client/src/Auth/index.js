import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

const Auth = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  return isAuthenticated ? (
    <AuthWrapper onClick={() => logout()}>LogOut</AuthWrapper>
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
export default Auth;
