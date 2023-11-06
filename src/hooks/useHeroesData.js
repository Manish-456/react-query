import { useMutation, useQuery, useQueryClient } from "react-query";
import axios from "axios";

const fetchHeroes = () => axios.get("http://localhost:3000/heroes");
export const useHeroesData = (onSuccess, onError) => {
  return useQuery("heroes", fetchHeroes, {
    cacheTime: 5 * 60 * 1000, // default caching time -> 5m
    staleTime: 0, // default to 0
    refetchOnMount: true, // default to true,
    refetchOnWindowFocus: false, // default to true
    // refetchInterval : refetchTime,
    // enabled: false,
    onSuccess,
    onError,
    // select : ({data}) => { // select is a function that automatically receives an api data as an argument.
    //   const heroNames = data.map(hero => hero.name);
    //   return heroNames;
    // }
  });
};

const addHeroData = (values) => {
  return axios.post(`http://localhost:3000/heroesd`, values);
};
export const useAddHeroData = () => {
  const queryClient = useQueryClient();
  return useMutation(addHeroData, {
    // onSuccess: (data) => {
    //   // queryClient.invalidateQueries({queryKey: "heroes"}) // Avoid the additional network requests
    //   queryClient.setQueryData("heroes", (oldData) => {
    //     return {
    //       ...oldData,
    //       data: [...oldData.data, data.data],
    //     };
    //   });
    // },
    onMutate : (newHero) => {
      queryClient.cancelQueries("heroes");
      const previousHeroData = queryClient.getQueryData("heroes");
      queryClient.setQueryData("heroes", (oldQueryData) => {
      return {
        ...oldQueryData,
        data : [...oldQueryData.data, {
          id : oldQueryData?.data?.length + 1,
          ...newHero
        }]
      }
      });
      return previousHeroData;
    },
    onError : (_error, _hero, context) => {
      queryClient.setQueryData('heroes', context.previousHeroData);
    },
    onSettled : () => {
      queryClient.invalidateQueries('heroes');
    }
  });
};
