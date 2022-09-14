import React from "react";
import styled from "styled-components";
import Pages from "../pages/Pages";
import { NavLink } from "react-router-dom";
import { BsBuilding } from "react-icons/bs";
import { HiOutlineUserCircle } from "react-icons/hi";
import { HashLink as Link } from "react-router-hash-link";

function Home() {
  return (
    <PrimaryDiv>
      <Header>
        <Logo>
          <Link2 to="#searchedSection">
            <BsBuilding size="2rem" />
          </Link2>
          <Link2 to="#searchedSection">Premium Estate</Link2>
        </Logo>
        <NavigationSection>
          <Ul>
            <Li>
              <Link1 to="#searchedSection" id="Rent">
                Rent
              </Link1>
            </Li>
            <Li>
              <NavLink1 to="/rent" id="Buy">
                Buy
              </NavLink1>
            </Li>
            <Li>
              <Link1 to="#savedSection" id="saved">
                Saved
              </Link1>
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
  width: 15vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

const NavigationSection = styled.div`
  width: 75vw;
  height: 100%;
`;

const UserSection = styled.div`
  background-color: transparent;
  width: 10vw;
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
  padding: 0;
  align-items: center;
  width: 100%;
`;
const Li = styled.li`
  background-color: transparent;
  float: left;
  display: block;
  text-align: center;
  padding-right: 8px;
  text-decoration: none;
  padding: 0.5rem;
  margin: 0.5rem;
  border-radius: 0.2rem;
  width: 3rem;
  transition-timing-function: ease;
  transition-duration: 0.2s;
  :hover {
    filter: invert();
    transform: scale(1.1);
    font-weight: 1000;
  }
`;

const NavLink1 = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-size: 0.8rem;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 10px;
  border-radius: 0.3rem;
`;

const Link1 = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 0.8rem;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 10px;
  border-radius: 0.3rem;
`;

const Link2 = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 0.8rem;
  text-align: center;
  font-family: "Work Sans", sans-serif;
  font-weight: 600;
`;

export default Home;
