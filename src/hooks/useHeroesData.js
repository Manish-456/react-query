import { useQuery } from "react-query";
import axios from "axios";


const fetchHeroes = () => axios.get("http://localhost:3000/heroes");

export const useHeroesData = (onSuccess, onError) => {
    return useQuery(
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
          // select : ({data}) => { // select is a function that automatically receives an api data as an argument.
          //   const heroNames = data.map(hero => hero.name);
          //   return heroNames;
          // }  
        }
      );
}