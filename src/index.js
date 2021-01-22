import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import SearchContextProvider from "./context/SearchValueContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <SearchContextProvider>
        <App />
      </SearchContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
