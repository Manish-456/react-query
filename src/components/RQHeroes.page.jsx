import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";

const fetchHeroes = () => axios.get("http://localhost:3000/heroes");

export default function RQHeroes() {
  // const [refetchTime, setRefetchTime] = useState(3000);

  const onSuccess = (data) => {
    console.log(`Perform side effect after data fetching`, data);
  };

  const onError = (error) => {
    // setRefetchTime(0);
    console.log(`Perform side effect after encountering error`, error);
  };

  const { data, isLoading, isError, error, refetch, isFetching } = useQuery(
    "heroes",
    fetchHeroes,
    {
      cacheTime: 5 * 60 * 1000, // default caching time -> 5m
      staleTime: 0, // default to 0
      refetchOnMount: true, // default to true,
      refetchOnWindowFocus: true, // default to true
      // refetchInterval : refetchTime,
      // enabled: false,
      onSuccess,
      onError,
      select : ({data}) => { // select is a function that automatically receives an api data as an argument.
        const heroNames = data.map(hero => hero.name);
        return heroNames;
      }  
    }
  );

  if (isLoading || isFetching) return <div>Loading...</div>;

  if (isError) return <div>{error.message}</div>;

  return (
    <div>
      <h2>RQ Heroes</h2>
      {/* <button type="button" onClick={refetch}>
        Fetch heroes
      </button> */}
      {data?.map((heroName) => (
        <div key={heroName} className="lists">
          <h3>{heroName}</h3>
        </div>
      ))}
      {/* {data?.data.map((hero) => (
        <div key={hero.id} className="lists">
          <h3>{hero.name}</h3>
        </div>
      ))} */}
    </div>
  );
}
