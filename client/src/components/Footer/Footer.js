import styled from "styled-components";
const Footer = () => {
  return (
    <FooterWrapper>
      <p>Made with love.</p>
      <p>-Angelo Mab</p>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 10vh;
`;
export default Footer;
