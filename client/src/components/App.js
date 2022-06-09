import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import GlobalStyles from "./GlobalStyles";
import Anime from "./Pages/Anime";
import Manga from "./Pages/Manga";
import Search from "./Search";

const App = () => {
  return (
    <AppWrapper>
      <GlobalStyles />
      <Header />
      <Main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/anime/:mal_id" element={<Anime />} />
          <Route path="/manga" element={<Manga />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Main>
      {/* <Footer /> */}
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  background-color: var(--secondary);
`;
const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* align-items: flex-; */
  width: 100%;
  /* margin: auto; */
  height: 100%;
`;

export default App;
