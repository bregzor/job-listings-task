import React, { useState, useContext, useEffect, useRef } from "react";
import { SearchContext } from "../context/SearchValueContext";
import Button from "@material-ui/core/Button";
import * as s from "./SearchPanel.styles";


export default function SearchPanel({ setInputValue, getJobList }) {

  const { setLoading } = useContext(SearchContext);

  return (
    <s.SearchPanelContainer>
      <input
        type="text"
        onChange={(input) => setInputValue(input.target.value)}
      />
      <Button
        onClick={() => {
          setLoading(true);
          getJobList();
        }}
        variant="contained"
        color="primary"
      >
        Get job!
      </Button>
    </s.SearchPanelContainer>
  );
}
