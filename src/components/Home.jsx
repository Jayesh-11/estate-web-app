import React from "react";
import styled from "styled-components";
import Pages from "../pages/Pages";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <PrimaryDiv>
      <Header>
        <Logo>Logo here</Logo>
        <NavigationSection>
          <Ul>
            <Li>
              <NavLink to="/rent" id="Rent">
                Rent
              </NavLink>
            </Li>
            <Li>
              <NavLink to="/buy" id="Buy">
                Buy
              </NavLink>
            </Li>
            <Li>
              <NavLink to="/sell" id="Sell">
                Saved
              </NavLink>
            </Li>
          </Ul>
        </NavigationSection>
        <UserSection>User login maybe</UserSection>
      </Header>
      <Pages />
    </PrimaryDiv>
  );
}

const PrimaryDiv = styled.div`
  background-color: #aae2aa;
  width: 100vw;
  height: 100vh;
`;

const Header = styled.div`
  margin: 0;
  background-color: blue;
  height: 10vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Logo = styled.div`
  background-color: yellow;
  width: 20vw;
  height: 100%;
`;

const NavigationSection = styled.div`
  background-color: pink;
  width: 60vw;
  height: 100%;
`;

const UserSection = styled.div`
  background-color: purple;
  width: 20vw;
  height: 100%;
`;
const Ul = styled.ul`
  background-color: #bc8484;
  list-style-type: none;
  height: 100%;
  margin: 0;
  display: flex;

  align-items: center;
`;
const Li = styled.li`
  background-color: #bef8e4;
  float: left;
  display: block;
  text-align: center;
  padding: 16px;
  text-decoration: none;
  padding: 0;
`;

export default Home;
