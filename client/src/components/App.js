import styled from "styled-components";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./Header";
import GlobalStyles from "./GlobalStyles";
import Anime from "./Pages/Anime";
import Manga from "./Pages/Manga";
import SearchAnime from "./Pages/Search/SearchAnime";
import Profile from "./Pages/Profile";
import FourOhFour from "./Pages/404";
import { useAuth0 } from "@auth0/auth0-react";
import Root from "./Home";
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
          <Route path="/search" element={<SearchAnime />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/seasonal" element={<Seasonal />} />
          <Route
            path="/profile"
            element={isAuthenticated ? <Profile /> : <Navigate to="/" />}
          />
          <Route path="*" element={<FourOhFour />} />
        </Routes>
      </Main>
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
  max-width: 1600px;
`;

export default App;
