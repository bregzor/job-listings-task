import React, { useState, useContext, useEffect, useRef } from "react";
import { SearchContext } from "../context/SearchValueContext";
import Button from '@material-ui/core/Button';
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
  const handledSearchString = () => {
    return inputValue.replace(/ /g, "+");
  };

  const getJobList = async () => {

    const handlePrvSearch = (value) => {
      return previousSearch.filter((item) => {
        return item.search == value ?? item;
      });
    };

    const prvResult = handlePrvSearch(handledSearchString());
    if (prvResult.length > 0) {
      return setResultData(prvResult[0].results);
    }

    try {
      fetch(
        `https://us-central1-wands-2017.cloudfunctions.net/githubjobs?description=${handledSearchString()}`
      )
        .then((res) => res.json())
        .then((data) => {
          setResultData(data);
          setPreviousSearch((prevSearch) => [
            ...prevSearch,
            { search: handledSearchString(), results: data },
          ]);
        });
    } catch (error) {
      console.log("Error", error.log);
    }
  };

  return (
    <SearchPanelContainer>
      <input
        type="text"
        onChange={(input) => setInputValue(input.target.value)}
      />
         <Button   onClick={() => {
          getJobList();
        }} variant="contained" color="primary">
        Get job!
      </Button>
    </SearchPanelContainer>
  );
}
