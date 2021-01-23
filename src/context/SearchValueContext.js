import React, { createContext, useState } from "react";

export const SearchContext = createContext({});

export default function SearchContextProvider({ children }) {

  const [previousSearch, setPreviousSearch] = useState([]);
  const [listData, setListData] = useState(null);
  const [resultData, setResultData] = useState(null);

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
