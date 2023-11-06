import { useQueries } from "react-query";
import { request } from "../utils/axios-utils";

const fetchHeroes = (heroId) => request({
  url : `/heroes/${heroId}`
})

export default function DynamicParallel({ heroId }) {
  useQueries(
    heroId.map((id) => ({
      queryKey: ["heroes", id],
      queryFn: () => fetchHeroes(id),
    }))
  );

  return <div>Dynamic Parallel Page</div>;
}
