import React, { useState } from "react";
import styled from "styled-components";
import { sample_data } from "../constants/MOCK_DATA";

function Searched() {
  const [data, setData] = useState(sample_data);
  const [price, setPrice] = useState("Price");
  const [area, setArea] = useState("Area");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("Type");
  const [displayTypeList, setDisplayTypeList] = useState(false);
  const listData = [...new Set(sample_data.map((item) => item.house_type))];

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

  const typeHandler = () => {
    const typeData = sample_data.filter((item) => {
      // console.log(item.house_type, type);
      return item.house_type === type;
    });
    console.log(typeData);
    setData(typeData);
  };

  const locationHandler = () => {
    const locationData = sample_data.filter((item) => {
      const locationNameDB = item.location.toLowerCase();
      return locationNameDB.includes(location) === true;
    });
    setData(locationData);
  };

  const displayList = () => {
    setDisplayTypeList(!displayTypeList);
  };

  const resetHandler = () => {
    setData(sample_data);
    setType("Type");
    setPrice("Price");
    setArea("Area");
  };

  return (
    <PrimaryDiv>
      <FilterSection>
        <FilterButton onClick={priceHandler}>{price}</FilterButton>
        <Div1>
          <FilterButton onClick={displayList}>{type}⬇️</FilterButton>
          {displayTypeList ? (
            <TypeListDiv>
              {listData.map((item) => {
                return (
                  <ListButton
                    onClick={() => {
                      setType(item);
                      typeHandler();
                    }}
                  >
                    {item}
                  </ListButton>
                );
              })}
            </TypeListDiv>
          ) : null}
        </Div1>
        {/* drop down menu*/}
        <LocationInput
          type="text"
          placeholder="Eg- New York"
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
            locationHandler();
          }}
        ></LocationInput>
        {/*search*/}
        <FilterButton onClick={areaHandler}>{area}</FilterButton>
        <FilterButton onClick={resetHandler}>Reset</FilterButton>
      </FilterSection>
      <SearchResults>
        {data.map((item) => {
          return (
            <Card key={item.id}>
              <CardImage src="/" alt="none"></CardImage>
              <CardData>house name - {item.house_name}</CardData>
              <CardData>cost - {item.rent_cost}</CardData>
              <CardData>location - {item.location}</CardData>
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
  height: 5vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  gap: 6vw;
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

const Div1 = styled.div`
  width: 10vw;
  height: 100%;
`;

const TypeListDiv = styled.div`
  height: 20vh;
  width: 10vw;
  word-wrap: normal;
  overflow-y: scroll;
  overflow-x: hidden;
  position: absolute;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;
`;
const FilterButton = styled.button`
  padding: 5px;
  border: none;
  outline: none;
  width: 10vw;
  height: 100%;
  font-size: 0.6rem;
`;

const ListButton = styled.button`
  width: 100%;
`;

const LocationInput = styled.input``;
export default Searched;
