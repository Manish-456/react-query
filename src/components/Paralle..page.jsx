import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const fetchHeroes = () => axios.get("http://localhost:3000/heroes");

const fetchFriends = () => axios.get("http://localhost:3000/friends");

export default function ParallelPage() {
  const { data: heroesData } = useQuery("heroes", fetchHeroes);
  const { data: friendsData} = useQuery("friends", fetchFriends);
  return <div>Parallel Queries PAge</div>;
}
