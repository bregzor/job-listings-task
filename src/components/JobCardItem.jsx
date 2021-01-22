import React, { useState, useEffect } from "react";

export const LIST_URL =
  "https://us-central1-wands-2017.cloudfunctions.net/githubjobs?description=javascript";
export const JOB_URL =
  "https://us-central1-wands-2017.cloudfunctions.net/githubjobs?id=35842a28-ff88-47ba-99e5-f9960ae901a4";

export default function JobCardItem({ props }) {

  const [position, setPosition] = useState(null);

  const getSpecificPosition = async () => {
    const id = props.match.params.id;
    try {
      fetch(
        `https://us-central1-wands-2017.cloudfunctions.net/githubjobs?id=${id}`
      )
        .then((res) => res.json())
        .then((data) => setPosition(data));
    } catch (error) {
      console.log(error.log);
    }
  };

  const renderJob = () => {
    console.log(position)
    return (
     <div>
      <img src={position.company_logo} width={250}/>
       <p>{position.title}</p>
       <div dangerouslySetInnerHTML={{ __html: position.description }} />
       <p>{position.location}</p>
       <p>{position.type}</p>
       <p>{position.how_to_apply}</p>
     </div>
    )
  };

  useEffect(() => {
    getSpecificPosition();
  }, []); 

  return <div>{position && renderJob()}</div>;
}
