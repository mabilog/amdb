import styled from "styled-components";

import Menu from "./Menu";
import Search from "./Search";
import Logo from "./Logo";
import User from "./User";
const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <Menu />
        <Logo />
        <Search />
        <User />
      </Container>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 75px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  min-width: 80%;
  max-width: 1800px;
  height: ;
`;

export default Header;
