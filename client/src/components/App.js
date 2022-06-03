import { useEffect } from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import GlobalStyles from "./GlobalStyles";
import Navbar from "./Navbar";

const App = () => {
  useEffect(() => {
    console.log("this is the useEffect");
    fetch("/api/test")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <AppWrapper>
      <GlobalStyles />
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nav" element={<Navbar />} />
        </Routes>
      </Main>
      <Footer />
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  background-color: var(--secondary);
`;
const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

export default App;
