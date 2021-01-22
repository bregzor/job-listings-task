import React, { useState, useContext } from "react";
import { SearchContext } from "../context/SearchValueContext";
import styled from "styled-components";

const SearchPanelContainer = styled.div`
  display: flex;
  width: 50%;
  align-self: center;
`;

export default function SearchPanel() {
  const { listData, setResultData, resultData } = useContext(SearchContext);
  const [inputValue, setInputValue] = useState("");

  const getResult = (search) => {

 

    const handledSearchString = search.replace(/ /g, "+");

    //Search in exisiting state object before fetching again
    if (resultData) { 
    
        const preResult = resultData.filter(
        (item) => item.description.includes(handledSearchString) == 1);
        
        console.log("Already in context", preResult)
    }


    const result = listData.filter(
      (item) => item.description.includes(handledSearchString) == 1
    );

    setResultData(result);
  };

  return (
    <SearchPanelContainer>
      <input
        type="text"
        onChange={(input) => setInputValue(input.target.value)}
      />
      <button
        onClick={() => {
          getResult(inputValue);
        }}
      >
        Search for job
      </button>
    </SearchPanelContainer>
  );
}
