import React, { useState } from "react";
import { useAddHeroData, useHeroesData } from "../hooks/useHeroesData";
import { Link } from "react-router-dom";

export default function RQHeroes() {
  // const [refetchTime, setRefetchTime] = useState(3000);
  const [hero, setHero] = useState("");
  const [alterEgo, setAlterEgo] = useState("");
  const {mutate} = useAddHeroData();

  const onSuccess = (data) => {
    console.log(`Perform side effect after data fetching`, data);
  };

  const onError = (error) => {
    // setRefetchTime(0);
    console.log(`Perform side effect after encountering error`, error);
  };

  const { data, isLoading, isError, error, refetch, isFetching } =
    useHeroesData(onSuccess, onError);

    const addHero = () => {
     mutate({name : hero, alterEgo});
    }

  if (isLoading || isFetching) return <div>Loading...</div>;

  if (isError) return <div>{error.message}</div>;

  return (
    <div>
      <h2>RQ Heroes</h2>
      <div className="lists">
        <input
          value={hero}
          onChange={(e) => setHero(e.target.value)}
          type="text"
          placeholder="Hero Name"
        />
        <br />
        <input
          type="text"
          value={alterEgo}
          onChange={(e) => setAlterEgo(e.target.value)}
          placeholder="Alter Ego"
        />
        <br />
        <br />
        <button onClick={addHero} type="button">Add Hero</button>
      </div>
      <br />
      <button type="button" onClick={refetch}>
        Fetch heroes
      </button>

      {data?.data.map((hero) => (
        <div key={hero.id} className="lists">
          <Link to={`/rq-heroes/${hero.id}`}>{hero.name}</Link>
        </div>
      ))}
    </div>
  );
}
