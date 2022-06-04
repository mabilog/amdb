import styled from "styled-components";

const Home = () => {
  return (
    <HomeWrapper>
      <div>Carousel</div>
      <div>Top Anime</div>
      <div>Recent Updates</div>
      <div>Schedule</div>
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  height: 100%;
  color: var(--white);
`;
export default Home;
