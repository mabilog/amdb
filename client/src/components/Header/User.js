import styled from "styled-components";

const User = () => {
  return <UserWrapper>Sign In</UserWrapper>;
};

const UserWrapper = styled.button`
  all: unset;
  background-color: var(--primary);
  color: var(--white);
  font-size: 16px;
  font-weight: 600;
  padding: 16px 30px;
  border-radius: 50px;
  cursor: pointer;
`;
export default User;
