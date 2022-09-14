import React, { useState } from "react";
import styled from "styled-components";
import { sample_data } from "../constants/MOCK_DATA";
import { BiBath, BiBed } from "react-icons/bi";
import { AiOutlineHome, AiFillStar } from "react-icons/ai";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";

function Searched() {
  const [data, setData] = useState(sample_data);
  const [price, setPrice] = useState("Price");
  const [area, setArea] = useState("Area");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("Type");
  const [displayTypeList, setDisplayTypeList] = useState(false);
  const listData = [...new Set(sample_data.map((item) => item.house_type))];
  const [savedCards, setSavedCards] = useState([]);
  const [popUp, setPopUp] = useState(false);

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

  const saveHandler = (x) => {
    let isInSaved = false;
    savedCards.map((item) => {
      if (item === x) {
        isInSaved = true;
      }
    });
    if (isInSaved) {
      setSavedCards(
        savedCards.filter((item) => {
          return item !== x;
        })
      );
    } else {
      setSavedCards([...savedCards, x]);
    }
    setPopUp(true);
    popUpHandler();
  };

  const popUpHandler = () => {
    setTimeout(() => {
      setPopUp(false);
    }, 1500);
  };

  return (
    <PrimaryDiv>
      {popUp ? (
        <PopUpDiv>
          <H2>Done</H2>
        </PopUpDiv>
      ) : null}
      <FilterSection id="searchedSection">
        <FilterButton onClick={priceHandler}>{price}</FilterButton>
        <Div1>
          <FilterButton onClick={displayList}>{type}</FilterButton>
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

        <FilterButton onClick={areaHandler}>{area}</FilterButton>
        <FilterButton onClick={resetHandler}>Reset</FilterButton>
        <LocationInput
          type="text"
          placeholder="Eg- New York"
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
            locationHandler(); // isInSet = true;
          }}
        ></LocationInput>
      </FilterSection>
      <SearchResults>
        {data.map((item) => {
          return (
            <Card key={item.id}>
              <CardImage src={item.image} alt="none"></CardImage>
              <CardData>
                <Span1>${item.rent_cost}</Span1>
                <Span2>/month</Span2>{" "}
                <SaveButton
                  onClick={() => {
                    saveHandler(item);
                  }}
                >
                  <BsBookmark />
                </SaveButton>
              </CardData>
              <CardData>
                <Span3>{item.house_name}</Span3>
              </CardData>
              <CardData>
                <AiFillStar /> {item.score}/5 {"  "}
                <GrLocation />
                {item.location}
              </CardData>
              <CardData>
                <Span4>
                  <BiBed /> {item.bedroom} Bedroom
                </Span4>
                <Span4>
                  <BiBath />
                  {item.bathroom} Baths
                </Span4>
              </CardData>
              <CardData>
                <Span4>
                  <AiOutlineHome />
                  {item.area} Sq-feet
                </Span4>
              </CardData>
            </Card>
          );
        })}
      </SearchResults>

      <SavedSection id="savedSection">
        <H1>Saved</H1>
        <SavedCardsDisplay>
          {savedCards.map((item) => {
            return (
              <Card key={item.id}>
                <CardImage src={item.image} alt="none"></CardImage>
                <CardData>
                  <Span1>${item.rent_cost}</Span1>
                  <Span2>/month</Span2>{" "}
                  <SaveButton
                    onClick={() => {
                      saveHandler(item);
                    }}
                  >
                    <BsFillBookmarkFill />
                  </SaveButton>
                </CardData>
                <CardData>
                  <Span3>{item.house_name}</Span3>
                </CardData>
                <CardData>
                  <AiFillStar /> {item.score}/5 {"  "}
                  <GrLocation />
                  {item.location}
                </CardData>
                <CardData>
                  <Span4>
                    <BiBed /> {item.bedroom} Bedroom
                  </Span4>
                  <Span4>
                    <BiBath />
                    {item.bathroom} Baths
                  </Span4>
                </CardData>
                <CardData>
                  <Span4>
                    <AiOutlineHome />
                    {item.area} Sq-feet
                  </Span4>
                </CardData>
              </Card>
            );
          })}
        </SavedCardsDisplay>
      </SavedSection>
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
  width: 100vw;
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
  transition-timing-function: ease;
  transition-duration: 0.2s;
  cursor: pointer;
  :hover {
    transform: scale(1.04);
  }
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
  border-radius: 1rem;
  margin-left: 1rem;
  margin-top: 0.5rem;
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
  cursor: pointer;
  transition-timing-function: ease;
  transition-duration: 0.2s;
  :hover {
    filter: invert();
    transform: scale(1.1);
    font-weight: 1000;
  }
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
  padding-left: 20px;
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
const SaveButton = styled.button`
  background-color: white;
  outline: none;
  border: none;
  border-radius: 100rem;
  cursor: pointer;
`;

const SavedSection = styled.div`
  width: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  column-gap: 5vh;
  row-gap: 2vw;
  padding-top: 2rem;
`;

const H1 = styled.h1``;

const SavedCardsDisplay = styled.div`
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

const PopUpDiv = styled.div`
  background-color: transparent;
  text-align: center;
  height: 10vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
`;

const H2 = styled.h2`
  font-weight: 400;
  font-family: "Fira Sans", sans-serif;
  font-style: italic;
  height: 100%;
  width: 20vw;
  background-color: #f3f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  border: solid 2px #18eb23;
`;
export default Searched;
