import React from "react";
import { useParams } from "react-router-dom";
import { useHeroData } from "../hooks/useHeroData";

export default function RQHero() {
  const { heroId } = useParams();
  const { isLoading, error, data, isError } = useHeroData(heroId);

  if (isLoading) return <div>Loading...</div>;

  if(isError) return <div>{error.message}</div>

  return <div className="lists">
    <h2>Hero</h2>
    <h3>{data.data.name} - {data.data.alterEgo}</h3>
  </div>;
}
