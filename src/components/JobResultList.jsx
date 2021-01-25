import React, { useContext } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { SearchContext } from "../context/SearchValueContext";
import * as s from "./JobResultList.styles";

export default function JobListItem() {
  const { resultData, setLoading } = useContext(SearchContext);
  return (
    <>
      <s.List>
        {resultData ? (
          resultData.map((job) => {
            return (
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                  lineHeight: "140%",
                }}
                to={`/jobs/${job.id}`}
                onClick={() => setLoading(true)}
              >
                <s.CardListItem key={job.id}>
                  <img src={job.company_logo} width={150} />
                  <strong>{job.type}</strong>
                  <h2>{job.title}</h2>
                  <a href={job.company_url}>Url</a>
                  <div style={{marginBottom:30}} dangerouslySetInnerHTML={{ __html: job.description }} />
                </s.CardListItem>
              </Link>
            );
          })
        ) : (
          <p>hej</p>
        )}
      </s.List>
    </>
  );
}
