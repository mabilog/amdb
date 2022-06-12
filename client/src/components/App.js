import styled from "styled-components";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import GlobalStyles from "./GlobalStyles";
import Anime from "./Pages/Anime";
import Manga from "./Pages/Manga";
import Search from "./Search";
import Profile from "./Pages/Profile";
import FourOhFour from "./Pages/404";
import { useAuth0 } from "@auth0/auth0-react";
import Root from "./Root";
import Schedule from "./Pages/Schedule";
import Seasonal from "./Pages/Seasonal";

const App = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <AppWrapper>
      <GlobalStyles />
      <Header />
      <Main>
        <Routes>
          <Route exact path="/" element={<Root />} />
          <Route path="/anime/:mal_id" element={<Anime />} />
          <Route path="/manga" element={<Manga />} />
          <Route path="/search" element={<Search />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/seasonal" element={<Seasonal />} />
          <Route
            path="/profile"
            element={isAuthenticated ? <Profile /> : <Navigate to="/" />}
          />
          <Route path="*" element={<FourOhFour />} />
        </Routes>
      </Main>
      {/* <Footer /> */}
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  background-color: var(--secondary);
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`;
const Main = styled.div`
  position: relative;
  margin: 10vh auto;
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  /* width: 100%;
  height: 80vh; */
  max-width: 1600px;
`;

export default App;
