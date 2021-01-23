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
