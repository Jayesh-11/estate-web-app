import React from "react";
import styled from "styled-components";

function Loader() {
  return (
    <Div1>
      <Div2>
        WELCOME!
        <br />
        Find your dream home
      </Div2>
    </Div1>
  );
}

const Div1 = styled.div`
  background-color: white;
  width: 100vw;
  height: 100vh;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Div2 = styled.div`
  margin: 0;
`;
export default Loader;
