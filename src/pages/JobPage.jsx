import React, { useContext, useState, useEffect } from "react";
import BaseLayout from "../components/parts/BaseLayout";
import { SearchContext } from "../context/SearchValueContext";
import JobCardItem from "../components/JobCardItem";
import CircularProgress from "@material-ui/core/CircularProgress";
import styled from "styled-components";

const LoaderWrapper = styled.div`
display:flex;
width:100%;

position:fixed;
top:20vh;
margin:auto;
`

const Loader = () => {
    return    <LoaderWrapper><CircularProgress delay={200}  color="secondary" /></LoaderWrapper>
}

export default function JobPage({ props }) {

  const { setLoading, loading } = useContext(SearchContext);
  const [position, setPosition] = useState(null);

  const getSpecificPosition = async () => {
    const id = props.match.params.id;
    try {
      fetch(
        `https://us-central1-wands-2017.cloudfunctions.net/githubjobs?id=${id}`
      )
        .then((res) => res.json())
        .then((data) => {
          setPosition(data);
          setLoading(false);
        });
    } catch (error) {
      console.log(error.log);
    }
  };

  useEffect(() => { 
    getSpecificPosition();
  }, []);

  return (
    <>
    <BaseLayout>
      {loading ? (
        <Loader/>
      ) : (
        <div>
          <JobCardItem
            data={position}
            getSpecificPosition={getSpecificPosition}
          />
        </div>
      )}
      </BaseLayout>
    </>
  );
}
