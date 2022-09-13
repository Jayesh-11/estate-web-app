import React, { useState } from "react";
import styled from "styled-components";
import { sample_data } from "../constants/MOCK_DATA";

function Searched() {
  const [data, setData] = useState(sample_data);
  const [price, setPrice] = useState("Price");
  const [area, setArea] = useState("Area");
  const [location, setLocation] = useState("Location");
  const [type, useType] = useState("Type");
  const priceHandler = () => {
    if (price === "" || price === "High to low") {
      const ascSort = data.sort((a, b) => {
        return a.rent_cost - b.rent_cost;
      });
      setPrice("Low to high");
      setData(ascSort);
    } else {
      const desSort = data.sort((a, b) => {
        return b.rent_cost - a.rent_cost;
      });
      setPrice("High to low");
      setData(desSort);
    }
  };
  const areaHandler = () => {
    if (area === "" || area === "High to low") {
      const ascSort = data.sort((a, b) => {
        return a.area - b.area;
      });
      setArea("Low to high");
      setData(ascSort);
    } else {
      const desSort = data.sort((a, b) => {
        return b.area - a.area;
      });
      setArea("High to low");
      setData(desSort);
    }
  };
  const typeHandler = () => {};
  const locationHandler = () => {};
  return (
    <PrimaryDiv>
      <FilterSection>
        <PriceButton onClick={priceHandler}>{price}</PriceButton>
        <button>{type}⬇️</button>
        {/* drop down menu*/}
        <button>{location}</button>
        {/*search*/}
        <button onClick={areaHandler}>{area}</button>
      </FilterSection>
      <SearchResults>
        {data.map((item) => {
          return (
            <Card key={item.id}>
              <CardImage src="/" alt="none"></CardImage>
              <CardData>house name - {item.house_name}</CardData>
              <CardData>cost - {item.rent_cost}</CardData>
              <CardData>area - {item.area}</CardData>
            </Card>
          );
        })}
      </SearchResults>
    </PrimaryDiv>
  );
}

const PrimaryDiv = styled.div`
  background-color: #34c634;
  width: 100vw;
  height: 90vh;
  overflow-x: hidden;
`;

const FilterSection = styled.div`
  background-color: #9940dd;
  width: 100vw;
  height: 10vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
const SearchResults = styled.div`
  width: 100%;
  background-color: #a292ae;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  column-gap: 5vh;
  row-gap: 2vw;
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #e77c7c;
  margin: 0;
`;

const CardImage = styled.img`
  height: 30vh;
  width: 40vh;
  background-color: #ac3232;
  margin: 0;
`;
const CardData = styled.div`
  height: 20vh;
  width: 40vh;
  background-color: #417b29;
  margin: 0;
`;

const PriceButton = styled.button``;
export default Searched;
