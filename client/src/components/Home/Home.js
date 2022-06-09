import styled from "styled-components";
import CurrentSeason from "./CurrentSeason";
import Schedule from "./Schedule";

const Home = () => {
  return (
    <HomeWrapper>
      <CurrentSeason />
      <Schedule />
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 
  height: 100%;
  color: var(--white);
  width: 90%;
  max-width: 1800px;
  margin: 0 auto;
  gap: 20px;
`;
export default Home;
