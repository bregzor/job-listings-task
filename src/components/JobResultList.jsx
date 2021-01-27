import React, { useContext } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { SearchContext } from "../context/SearchValueContext";
import * as s from "./JobResultList.styles";

export default function JobResultList({ resultData }) {
  const { setLoading } = useContext(SearchContext);

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
                key={job.id}
              >
                <s.CardListItem id={"listItem"}>
                  <s.ImageWrapper>
                    <img src={job.company_logo} />
                  </s.ImageWrapper>

                  <h2>{job.title}</h2>
                  <strong>{job.type}</strong>
                  <a href={job.company_url}>Go to company website!</a>
                  <s.DescriptionContainer
                    dangerouslySetInnerHTML={{ __html: job.description }}
                  />
                </s.CardListItem>
              </Link>
            );
          })
        ) : (
          <p>No jobs to be found!</p>
        )}
      </s.List>
    </>
  );
}
