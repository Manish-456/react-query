import { useQuery } from "react-query";
import { request } from "../utils/axios-utils";

const fetchHeroes = () =>
  request({
    url: `/heroes`,
  });

const fetchFriends = () =>
  request({
    url: `/friends`,
  });

export default function ParallelPage() {
  useQuery("heroes", fetchHeroes);
  useQuery("friends", fetchFriends);
  return <div>Parallel Queries Page</div>;
}
