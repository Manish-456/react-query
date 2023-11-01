import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const fetchHeroes = () => axios.get("http://localhost:3000/heroes");

export default function RQHeroes() {
  const { data, isLoading, isError, error, isFetching } = useQuery("heroes", fetchHeroes, {
   cacheTime : 5 * 60 * 1000 // default caching time -> 5M
  });

  if (isLoading ) return <div>Loading...</div>;

  if (isError) return <div>{error.message}</div>;

  return (
    <div>
      <h2>RQ Heroes</h2>
      {data?.data.map((hero) => (
        <div key={hero.id} className="lists">
          <h3>{hero.name}</h3>
          <p>{hero.alterEgo}</p>
        </div>
      ))}
    </div>
  );
}