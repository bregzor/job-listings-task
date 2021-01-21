import React, { useState } from "react";
import styled from "styled-components";

const SearchPanelContainer = styled.div`
display:flex;
width:50%;
align-self:center;
`;

export default function SearchPanel({ getResult, listData }) {
  const [inputValue, setInputValue] = useState("");
  return (
    <SearchPanelContainer>
      <input
        type="text"
        onChange={(input) => setInputValue(input.target.value)}
      />
      <button
        onClick={() => {
          getResult(listData, inputValue);
        }}
      >
        Search for job
      </button>
    </SearchPanelContainer>
  );
}
