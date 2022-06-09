import styled from "styled-components";

import Menu from "./Menu";
import Search from "./Search";
import Logo from "./Logo";
import User from "./User";
import Auth from "../../Auth";
const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <Left>
          <Menu />
          <Logo />
        </Left>
        <Right>
          <Search />
          <Auth />
        </Right>
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

const Left = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 50%;
  gap: 20px;
`;

export default Header;
