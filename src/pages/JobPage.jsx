import React, { useContext, useState, useEffect } from "react";
import BaseLayout from "../components/parts/BaseLayout";
import { SearchContext } from "../context/SearchValueContext";
import JobCardItem from "../components/JobCardItem";
import CircularProgress from "@material-ui/core/CircularProgress";
import styled from "styled-components";
import LoadContentWrapper from "../components//LoadContentWrapper";
import { JOB_URL } from "./StartPage";

export default function JobPage({ props }) {
  const { setLoading, loading } = useContext(SearchContext);
  const [position, setPosition] = useState(null);

  useEffect(() => {
    const id = props.match.params.id;
    try {
      fetch(`${JOB_URL}${id}`)
        .then((res) => res.json())
        .then((data) => {
          setPosition(data);
          setLoading(false);
        });
    } catch (error) {
      console.log(error.log);
    }
  }, []);

  return (
    <>
      <BaseLayout title={"GitHub Job-listing"}>
        <LoadContentWrapper loading={loading}>
          <JobCardItem data={position} />
        </LoadContentWrapper>
      </BaseLayout>
    </>
  );
}
