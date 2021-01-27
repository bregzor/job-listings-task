import React, { useState, useContext, useEffect, useRef } from "react";
import { SearchContext } from "../context/SearchValueContext";
import Button from "@material-ui/core/Button";
import * as s from "./SearchPanel.styles";

export default function SearchPanel({ setInputValue, inputValue, getJobList }) {
  const { setLoading } = useContext(SearchContext);

  return (
    <s.SearchPanelContainer>
      <s.InputContainer
        type="text"
        onChange={(input) => setInputValue(input.target.value)}
        placeholder={"Your search word!"}
      />
      <Button
        onClick={() => {
          setLoading(true);
          getJobList();
        }}
        variant="contained"
        id="btn"
        color="secondary"
        disabled={inputValue.length < 2 ? true : false}
      >
        Find job!
      </Button>
    </s.SearchPanelContainer>
  );
}
