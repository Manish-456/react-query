import { useQuery, useQueryClient } from "react-query";
import { request } from "../utils/axios-utils";

const fetchHeroById = ({ queryKey }) => {
  const heroId = queryKey[1];
  // return axios.get(`http://localhost:3000/heroes/${heroId}`);
  return request({
    url : `/heroes/${heroId}`
  })
};


export const useHeroData = (heroId) => {
  const queryClient = useQueryClient(); // queryClient instance has access to the cache of the query which we can now access to set the initial data.
  return useQuery(["hero", heroId], fetchHeroById, {
    initialData: () => {
      const hero = queryClient
        .getQueryData("hero")
        ?.data?.find((hero) => hero.id === parseInt(heroId));
      if (hero) {
        return {
          data: hero,
        };
      }
      return undefined;
    },
  });
};
