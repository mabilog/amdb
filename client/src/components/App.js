import { useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";

const App = () => {
  useEffect(() => {
    console.log("this is the useEffect");
    fetch("/api/test")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Main>
      <Footer />
    </Router>
  );
};

const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

export default App;
