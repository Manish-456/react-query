import React from "react";
import { useHeroesData } from "../hooks/useHeroesData";

export default function RQHeroes() {
  // const [refetchTime, setRefetchTime] = useState(3000);

  const onSuccess = (data) => {
    console.log(`Perform side effect after data fetching`, data);
  };

  const onError = (error) => {
    // setRefetchTime(0);
    console.log(`Perform side effect after encountering error`, error);
  };

  const { data, isLoading, isError, error, refetch, isFetching } =
    useHeroesData(onSuccess, onError);

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
