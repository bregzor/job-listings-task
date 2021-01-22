import React, { useState, useEffect, useContext } from "react";
import { Route, Switch } from "react-router-dom";
import JobCardItem from "./components/JobCardItem";
import BaseLayout from "./components/parts/BaseLayout";
import SearchPanel from "./components/SearchPanel";
import { SearchContext } from "./context/SearchValueContext";
import JobResultList from "./components/JobResultList";

function App() {

  const {
    previousSearch,
    setListData,
    listData,
    resultData,
    setResultData,
  } = useContext(SearchContext);

  const getJobList = async () => {
    try {
      fetch(
        "https://us-central1-wands-2017.cloudfunctions.net/githubjobs?description=javascript"
      )
        .then((res) => res.json())
        .then((data) => {
          setListData(data);
          console.log(listData);
        });
    } catch (error) {
      console.log("Error", error.log);
    }
  };

  useEffect(() => getJobList(), []);

  return (
    <Switch>
      <Route
        path="/jobs/:id"
        render={(props) => {
          return (
            <BaseLayout>
              <JobCardItem props={props} />
            </BaseLayout>
          );
        }}
      ></Route>
      <Route path="/">
        <BaseLayout>
          <SearchPanel />
          {resultData ? (
            <JobResultList/>
          ) : (
            "No jobs found yet"
          )}
        </BaseLayout>
      </Route>
    </Switch>
  );
}

export default App;
