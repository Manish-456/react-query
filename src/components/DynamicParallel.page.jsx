import axios from "axios";
import { useQueries } from "react-query";

const fetchHeroes = (heroId) =>
  axios.get(`http://localhost:3000/heroes/${heroId}`);

export default function DynamicParallel({ heroId }) {
  useQueries(
    heroId.map((id) => ({
      queryKey: ["heroes", id],
      queryFn: () => fetchHeroes(id),
    }))
  );

  return <div>Dynamic Parallel Page</div>;
}
