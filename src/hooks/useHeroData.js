import axios from "axios";
import { useQuery } from "react-query";

const fetchHeroById = ({queryKey}) => {
  const heroId = queryKey[1];
  return axios.get(`http://localhost:3000/heroes/${heroId}`);
};

export const useHeroData = (heroId) => {
  return useQuery(["hero", heroId], fetchHeroById);
};
