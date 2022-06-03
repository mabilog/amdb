import styled from "styled-components";

import { FaBars } from "react-icons/fa";

const Menu = () => {
  return (
    <MenuWrapper>
      <Toggle>
        <FaBars />
      </Toggle>
    </MenuWrapper>
  );
};

const MenuWrapper = styled.div`
  position: relative;
  display: inline-block;
  justify-content: center;
  align-items: center;
  padding: 10px;

  cursor: pointer;
`;

const Toggle = styled.div`
  display: flex;
  font-size: 32px;
  color: var(--white);
  transition: 200ms ease;
  &:hover {
    color: var(--primary);
  }
`;
export default Menu;
