import React, { useState, useEffect } from "react";

export default function JobCardItem({ props }) {
  const [position, setPosition] = useState(null);

  const getSpecificPosition = async () => {
    const id = props.match.params.id;
    console.log(id);
    try {
      fetch(`https://jobs.github.com/positions/${id}.json`)
        .then((res) => res.json())
        .then((data) => setPosition(data));
    } catch (error) {
      console.log(error.log);
    }
  };

  useEffect(() => {
    getSpecificPosition();
  }, [position]);

  return (
    <div>
      {position &&
        position.map((item) => {
          return <p>{item.title}</p>;
        })}
    </div>
  );
}
