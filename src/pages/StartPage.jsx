import React, { useContext, useState } from "react";
import BaseLayout from "../components/parts/BaseLayout";
import SearchPanel from "../components/SearchPanel";
import JobResultList from "../components/JobResultList";
import LoadContentWrapper from "../components/LoadContentWrapper";
import { SearchContext } from "../context/SearchValueContext";

const BASE_URL = "https://us-central1-wands-2017.cloudfunctions.net/";

const LIST_URL = `${BASE_URL}/githubjobs?description=`;

export const JOB_URL = `${BASE_URL}/githubjobs?id=`;

export default function StartPage() {
  const {
    setResultData,
    setLoading,
    setPreviousSearch,
    previousSearch,
    resultData,
    loading,
  } = useContext(SearchContext);

  const [inputValue, setInputValue] = useState("");
  const handledSearchString = () => {
    return inputValue.replace(/ /g, "+");
  };

  const getJobList = async () => {
    const handlePrvSearch = (value) => {
      return previousSearch.filter((item) => item.search == value ?? item);
    };

    const prvResult = handlePrvSearch(handledSearchString());
    if (prvResult.length > 0) {
      setLoading(false);
      return setResultData(prvResult[0].results);
    }

    try {
      return fetch(`${LIST_URL}${handledSearchString()}`)
        .then((res) => res.json())
        .then((data) => {
          setResultData(data);
          setPreviousSearch((prevSearch) => [
            ...prevSearch,
            { search: handledSearchString(), results: data },
          ]);
          setLoading(false);
        });
    } catch (error) {
      console.log("Error", error.log);
    }
  };

  return (
    <>
      <BaseLayout title="Github Job-listing">
        <SearchPanel
          getJobList={getJobList}
          setInputValue={setInputValue}
          inputValue={inputValue}
        />
        <LoadContentWrapper loading={loading}>
          {resultData && resultData.length > 0 ? (
           <>
           <p>Jobs found: {resultData.length}</p>
            <JobResultList resultData={resultData} />
            </> 
          ) : (
            <p>No jobs found yet</p>
          )}
        </LoadContentWrapper>
      </BaseLayout>
    </>
  );
}
