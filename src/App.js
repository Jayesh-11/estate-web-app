import React from "react";
import Home from "./components/Home";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import Loader from "./components/Loader";
import { useState, useEffect } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });
  return (
    <>
      {isLoading === true ? (
        <Loader />
      ) : (
        <BrowserRouter>
          <PrimaryDiv>
            <Home />
          </PrimaryDiv>
        </BrowserRouter>
      )}
    </>
  );
}

const PrimaryDiv = styled.div`
  margin: 0;
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(
    to right top,
    #ed80ff,
    #d265fd,
    #b04cfd,
    #8535fd,
    #3f24ff
  );
  display: flex;
  justify-content: center;
`;

export default App;
