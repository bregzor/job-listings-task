import React from "react";
import styled from "styled-components";

const JobDetailWrapper = styled.div`
    width:55vw;
    font-size: 14px;
    background: white;
    padding: 30px;
    border-radius: 5px;
    font-size:13px;
    
  box-shadow:0px 0px 2px gray;
  color: #5f5f5f;
`;
const JobTitle = styled.h2``;

export default function JobCardItem({ data }) {
  return (
    <>
      {data ? (
        <JobDetailWrapper>
          <img src={data.company_logo} width={250} />
          <h2>{data.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: data.description }} />
          <p>{data.location}</p>
          <p>{data.type}</p>
          <p>{data.how_to_apply}</p>
        </JobDetailWrapper>
      ) : (
        <p>Nothing to be found</p>
      )}
    </>
  );
}
