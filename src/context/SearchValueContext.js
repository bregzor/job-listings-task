import React, { createContext, useState } from "react";


export const SearchContext = createContext({});

export default function SearchContextProvider({ children }) {

  const [previousSearch, setPreviousSearch] = useState([]);
  const [listData, setListData] = useState([]);
  const [resultData, setResultData] = useState([]);

  return (
    <SearchContext.Provider
      value={{
        previousSearch,
        setPreviousSearch,
        listData,
        setListData,
        resultData,
        setResultData,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
