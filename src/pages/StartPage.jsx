import React, {useContext, useState} from "react";
import BaseLayout from "../components/parts/BaseLayout";
import SearchPanel from "../components/SearchPanel";
import JobResultList from "../components/JobResultList";
import {SearchContext} from  "../context/SearchValueContext";


export const LIST_URL =
  "https://us-central1-wands-2017.cloudfunctions.net/githubjobs?description=javascript";
export const JOB_URL =
  "https://us-central1-wands-2017.cloudfunctions.net/githubjobs?id=35842a28-ff88-47ba-99e5-f9960ae901a4";



export default function StartPage() {


    const {
        setResultData,
        setLoading,
        setPreviousSearch,
        previousSearch,
      } = useContext(SearchContext);
    
      const [inputValue, setInputValue] = useState("");
      const handledSearchString = () => {
        return inputValue.replace(/ /g, "+");
      };
    
      const getJobList = async () => {
        const handlePrvSearch = (value) => {
          return previousSearch.filter((item) => {
            return item.search == value ?? item;
          });
        };
    
        const prvResult = handlePrvSearch(handledSearchString());
        if (prvResult.length > 0) {
          setLoading(false)
          return setResultData(prvResult[0].results);
        }
    
       try {
         return fetch(
            `https://us-central1-wands-2017.cloudfunctions.net/githubjobs?description=${handledSearchString()}`
          )
            .then((res) => res.json())
            .then((data) => {
              setResultData(data);
              setPreviousSearch((prevSearch) => [
                ...prevSearch,
                { search: handledSearchString(), results: data },
              ]);
              setLoading(false)
            });
        } catch (error) {
          console.log("Error", error.log);
        }
      };
    

    

const {resultData} = useContext(SearchContext)

  return (
    <>
      <BaseLayout>
        <SearchPanel getJobList={getJobList} setInputValue={setInputValue} />
        {resultData ? <JobResultList/> : "No jobs found yet"}
      </BaseLayout>
    </>
  );
}
