import React from "react";
import styled from "styled-components";
import Pages from "../pages/Pages";
import { NavLink } from "react-router-dom";
import { BsBuilding } from "react-icons/bs";
import { HiOutlineUserCircle } from "react-icons/hi";

function Home() {
  return (
    <PrimaryDiv>
      <Header>
        <Logo>
          <BsBuilding size="2rem" />
          <H6>Premium Estate</H6>
        </Logo>
        <NavigationSection>
          <Ul>
            <Li>
              <NavLink1 to="/rent" id="Rent">
                Rent
              </NavLink1>
            </Li>
            <Li>
              <NavLink1 to="/rent" id="Buy">
                Buy
              </NavLink1>
            </Li>
            <Li>
              <NavLink1 to="/rent" id="Sell">
                Saved
              </NavLink1>
            </Li>
          </Ul>
        </NavigationSection>
        <UserSection>
          <HiOutlineUserCircle size="2rem" />
        </UserSection>
      </Header>
      <Pages />
    </PrimaryDiv>
  );
}

const PrimaryDiv = styled.div`
  /* background-color: rgba(194, 129, 238, 0.3); */
  width: 100vw;
  height: 100vh;
`;

const Header = styled.div`
  margin: 0;
  height: 10vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Logo = styled.div`
  background-color: transparent;
  width: 20vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NavigationSection = styled.div`
  width: 60vw;
  height: 100%;
`;

const UserSection = styled.div`
  background-color: transparent;
  width: 20vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Ul = styled.ul`
  background-color: transparent;
  list-style-type: none;
  height: 100%;
  margin: 0;
  display: flex;
  align-items: center;
`;
const Li = styled.li`
  background-color: transparent;
  float: left;
  display: block;
  text-align: center;
  padding: 16px;
  text-decoration: none;
  padding: 0.5rem;
  margin: 0.5rem;
  border-radius: 0.2rem;
  width: 4rem;
`;

const H6 = styled.h6`
  margin: 0;
  margin-top: 0.2rem;
  text-align: center;
`;

const NavLink1 = styled(NavLink)`
  text-decoration: none;
  color: black;
`;

export default Home;
