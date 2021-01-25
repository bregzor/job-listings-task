import React, { useState, useEffect, useContext } from "react";
import * as s from "./BaseLayout.styles";
import { SearchContext } from "./../../context/SearchValueContext";
import CircularProgress from "@material-ui/core/CircularProgress";

const Loader = () => {
  return (
    <s.LoaderWrapper>
      <CircularProgress delay={200} color="secondary" />
    </s.LoaderWrapper>
  );
};

export default function BaseLayout({ children }) {
  const { loading } = useContext(SearchContext);

  return (
    <s.Wrapper>
      <s.JobHeader>Job-listings</s.JobHeader>
      <s.JobListContainer>
        {loading ? <Loader /> : <s.JobListWrapper>{children}</s.JobListWrapper>}
      </s.JobListContainer>
    </s.Wrapper>
  );
}
