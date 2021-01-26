import React, { useState, useEffect, useContext } from "react";
import * as s from "./BaseLayout.styles";

export default function BaseLayout({ title, children }) {
  return (
    <s.Wrapper>
      <s.JobHeader>{title}</s.JobHeader>
      <s.JobListContainer>
     <s.JobListWrapper>{children}</s.JobListWrapper>
      </s.JobListContainer>
    </s.Wrapper>
  );
}
