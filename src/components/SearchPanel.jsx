import React, { useState, useContext, useEffect, useRef } from "react";
import { SearchContext } from "../context/SearchValueContext";
import usePrevious from "./usePrevious";
import styled from "styled-components";

const SearchPanelContainer = styled.div`
  display: flex;
  width: 50%;
  align-self: center;
`;

export default function SearchPanel({}) {
  const {
    setListData,
    listData,
    setResultData,
    resultData,
    setPreviousSearch,
    previousSearch,
  } = useContext(SearchContext);

  const [inputValue, setInputValue] = useState("");
  const [search, setSearch] = useState("");
  const prevStateData = usePrevious(resultData);
  const prevStateSearchPhrase = usePrevious(search);

  const handledSearchString = () => {
    return inputValue.replace(/ /g, "+");
  };

  const getJobList = async () => {
    try {
      fetch(
        `https://us-central1-wands-2017.cloudfunctions.net/githubjobs?description=${handledSearchString()}`
      )
        .then((res) => res.json())
        .then((data) => {
          setResultData(data);
          setSearch(handledSearchString());

          const arr = [{ [handledSearchString()]: data }];
            
        });
    } catch (error) {
      console.log("Error", error.log);
    }
  };

  const handlePreviousSearch = (search) => {
    const entries = Object.entries(previousSearch)
    console.log("JAHA", entries);
    // if (previousSearch.length > 0) {



    //   const result = Object.entries(previousSearch).filter(
    //     (word) => word[0].includes(search) == 1
    //   );

    //   console.log(result);
    // }
  };

  useEffect(() => {
    console.log("PREVIOUS", previousSearch);
  }, [previousSearch]);

  return (
    <SearchPanelContainer>
      <input
        type="text"
        onChange={(input) => setInputValue(input.target.value)}
      />
      <button
        onClick={() => {
          getJobList();
          handlePreviousSearch(handledSearchString());
        }}
      >
        Search for job
      </button>
    </SearchPanelContainer>
  );
}
