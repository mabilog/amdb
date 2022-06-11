import { Link } from "react-router-dom";
import styled from "styled-components";
const FourOhFour = () => {
  return (
    <FourOhFourWrapper>
      <Home to="/">🏡</Home>
    </FourOhFourWrapper>
  );
};

const FourOhFourWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Home = styled(Link)`
  text-decoration: none;
  font-size: 100px;
`;

export default FourOhFour;
