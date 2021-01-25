import React, { useState, useEffect, useContext } from "react";
import { SearchContext } from "../context/SearchValueContext";

export default function JobCardItem({ data }) {
  const renderJob = () => {
    return (
      <div>
        <img src={data.company_logo} width={250} />
        <p>{data.title}</p>
        <div dangerouslySetInnerHTML={{ __html: data.description }} />
        <p>{data.location}</p>
        <p>{data.type}</p>
        <p>{data.how_to_apply}</p>
      </div>
    );
  };

  return <div>{data && renderJob()}</div>;
}
