import React from "react";
import { Route, Switch } from "react-router-dom";
import JobCardItem from "./components/JobCardItem";
import BaseLayout from "./components/parts/BaseLayout";
import StartPage from "./pages/StartPage";
import JobPage from "./pages/JobPage";


function App() {
  return (
    <Switch>
      <Route
        path="/jobs/:id"
        render={(props) => {
          return (
            <JobPage props={props}/>
          );  
        }}
      ></Route>
      <Route path="/" component={StartPage} />
    </Switch>
  );
}

export default App;
