import { Link } from "react-router-dom";
import styled from "styled-components";

const Logo = () => {
  return (
    <LogoWrapper>
      <Title>
        <LinkWrapper to="/">
          <FirstLetter>A</FirstLetter>MDB
        </LinkWrapper>
      </Title>
    </LogoWrapper>
  );
};

const LogoWrapper = styled.div``;

const Title = styled.h1``;

const LinkWrapper = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--white);
`;

const FirstLetter = styled.span`
  background-color: var(--primary);
  color: var(--white);
  width: 35px;
  border-radius: 50%;
`;

export default Logo;
