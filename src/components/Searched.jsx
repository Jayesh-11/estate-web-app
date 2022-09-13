import React, { useState } from "react";
import styled from "styled-components";
import { sample_data } from "../constants/MOCK_DATA";
import { BiBath, BiBed } from "react-icons/bi";

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
              <CardImage src={item.image} alt="none"></CardImage>
              <CardData>
                <Span1>${item.rent_cost}</Span1>
                <Span2>/month</Span2>{" "}
              </CardData>
              <CardData>
                <Span3>{item.house_name}</Span3>
              </CardData>
              <CardData>{item.score} / 5</CardData>
              <CardData>{item.location}</CardData>
              <CardData>
                <Span4>
                  <BiBed /> {item.bedroom} Bedroom
                </Span4>
                <Span4>
                  <BiBath />
                  {item.bathroom} Baths
                </Span4>
              </CardData>
            </Card>
          );
        })}
      </SearchResults>
    </PrimaryDiv>
  );
}

const PrimaryDiv = styled.div`
  width: 100vw;
  height: 90vh;
  overflow-x: hidden;
`;

const FilterSection = styled.div`
  background-color: transparent;
  width: 100vw;
  height: 5vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2vw;
`;
const SearchResults = styled.div`
  width: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  column-gap: 5vh;
  row-gap: 2vw;
  padding-top: 2rem;
`;

const Card = styled.div`
  width: 40vh;
  display: flex;
  justify-content: baseline;
  align-items: center;
  flex-direction: column;
  background-color: white;
  margin: 0;
  border-radius: 1rem;
`;

const CardImage = styled.img`
  height: 30vh;
  width: 40vh;
  margin: 0;
  border-radius: 1rem;
`;
const CardData = styled.div`
  height: 5vh;
  width: 35vh;
  background-color: white;
  margin-top: 1rem;
  border-radius: 1rem;
  margin-left: 1rem;
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
  border-radius: 0.5rem;
  gap: 0.2rem;
`;
const FilterButton = styled.button`
  padding: 5px;
  border: none;
  outline: none;
  width: 10vw;
  height: 100%;
  font-size: 0.6rem;
  border-radius: 0.5rem;
`;

const ListButton = styled.button`
  width: 100%;
  outline: none;
  border: none;
  border-top: 1px;
  border-radius: 0.2rem;
  padding: 5px;
`;

const LocationInput = styled.input`
  width: 30vw;
  outline: none;
  border: none;
  border-radius: 100rem;
  background-color: rgb(239, 239, 239);
`;

const Span1 = styled.span`
  font-weight: 1000;
  font-size: 2rem;
`;
const Span2 = styled.span``;
const Span3 = styled.span`
  font-weight: 800;
  font-size: 1.2rem;
`;
const Span4 = styled.span`
  margin-right: 1vw;
  background-color: rgba(194, 129, 238, 0.4);
  border-radius: 0.2rem;
  padding: 0.1rem;
`;
export default Searched;
