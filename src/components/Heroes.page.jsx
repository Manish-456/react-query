import React, { useEffect, useState } from "react";
import { request } from "../utils/axios-utils";

export default function Heroes() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    request({
      url : '/heroes'
    })
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error : {error}</div>;

  return (
    <div>
      <h2>Super Heroes</h2>
      {data?.map((hero) => (
        <div key={hero.id} className="lists">
            <h3>{hero.name}</h3>
            <p>{hero.alterEgo}</p>
        </div>
      ))}
    </div>
  );
}
