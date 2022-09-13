import React from "react";
import Home from "./components/Home";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <PrimaryDiv>
        <Home />
      </PrimaryDiv>
    </BrowserRouter>
  );
}

const PrimaryDiv = styled.div`
  margin: 0;
  height: 100vh;
  width: 100vw;
  background-color: red;
  display: flex;
  justify-content: center;
`;

export default App;
