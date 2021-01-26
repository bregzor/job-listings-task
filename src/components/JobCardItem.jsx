import React from "react";
import styled from "styled-components";

const JobDetailWrapper = styled.div``;
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
