import styled from "styled-components";
import Schedule from "./Schedule";

const Home = () => {
  return (
    <HomeWrapper>
      <div>Carousel</div>
      <Schedule />
      <div>Schedule</div>
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
`;
export default Home;
