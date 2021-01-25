import React, { createContext, useState } from "react";


export const SearchContext = createContext({});

export default function SearchContextProvider({ children }) {

  const [previousSearch, setPreviousSearch] = useState([]);
  const [listData, setListData] = useState([]);
  const [resultData, setResultData] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <SearchContext.Provider
      value={{
        previousSearch,
        setPreviousSearch,
        listData,
        setListData,
        resultData,
        setResultData,
        loading,
        setLoading
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
