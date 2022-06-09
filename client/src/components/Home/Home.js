import { useEffect, useContext } from "react";
import styled from "styled-components";
import CurrentSeason from "./CurrentSeason";
import { HomeContext } from "./HomeContext";
import Schedule from "./Schedule";

const Home = () => {
  const { setCurrentSeasonAnime } = useContext(HomeContext);
  useEffect(() => {
    fetch(`/animeApi/getCurrentSeason`)
      .then((res) => res.json())
      .then((data) => {
        setCurrentSeasonAnime(data.data.data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <HomeWrapper>
      {/* <div>Carousel</div> */}
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
