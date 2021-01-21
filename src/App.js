import react, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import JobCardItem from "./components/JobCardItem";
import BaseLayout from "./components/parts/BaseLayout";
import JobListItem from "./components/JobListItem";
import SearchPanel from "./components/SearchPanel";

function App() {
  const [listData, setListData] = useState(null);

  const [resultData, setResultData] = useState(null);

  const getJobList = async () => {
    try {
      fetch(
        "https://us-central1-wands-2017.cloudfunctions.net/githubjobs?description=javascript"
      )
        .then((res) => res.json())
        .then((data) => setListData(data));
    } catch (error) {
      console.log("Error", error.log);
    }
  };

  const getResult = async (data, search) => {
    const handledSearchString = search.replace(/ /g, "+");

    const result = data.filter(
      (item) => item.description.includes(handledSearchString) == 1
    );

    setResultData(result);
  };

  useEffect(() => getJobList(), []);

  return (
    <Switch>
      <Route
        path="/position/:id"
        render={(props) => {
          return <JobCardItem props={props} />;
        }}
      ></Route>
      <Route path="/">
        <BaseLayout>
          <SearchPanel getResult={getResult} listData={listData} />
          {resultData ? (
            <JobListItem resultData={resultData} />
          ) : (
            "No jobs found yet"
          )}
        </BaseLayout>
      </Route>
    </Switch>
  );
}

export default App;
