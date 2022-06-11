import styled from "styled-components";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
// import Footer from "./Footer";
import GlobalStyles from "./GlobalStyles";
import Anime from "./Pages/Anime";
import Manga from "./Pages/Manga";
import Search from "./Search";
import Profile from "./Pages/Profile";
import FourOhFour from "./Pages/404";
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
  const { isAuthenticated } = useAuth0();
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
  height: 100vh;
  width: 100vw;
  min-height: 100vh;
  min-width: 100vw;
`;
const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-width: 1600px;
`;

export default App;
