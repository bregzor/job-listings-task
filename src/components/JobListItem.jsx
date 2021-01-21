import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const CardListItem = styled.article`
  display: flex;
  flex-direction: column;
  background: #cacaca;
  margin-bottom: 20px;
  padding: 5%;
`;

export default function JobListItem({ resultData }) {
  return resultData.map((job) => {
    return (
      <Link
        style={{ textDecoration: "none", color: "black", lineHeight: "140%" }}
        to={`/position/${job.id}`}
      >
        <CardListItem key={job.id}>
          <img src={job.company_logo} width={150} />
          <strong>{job.type}</strong>
          <h2>{job.title}</h2>
          <a href={job.company_url}>Url</a>
          <p>{job.description}</p>
        </CardListItem>
      </Link>
    );
  });
}
