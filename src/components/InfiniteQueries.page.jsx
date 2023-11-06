import { Fragment } from "react";
import { useInfiniteQuery } from "react-query";
import { request } from "../utils/axios-utils";

const fetchColors = ({ pageParam = 1 }) =>
  request({
    url : `/colors?_limit=2&_page=${pageParam}`
  });

export default function InfiniteQuery() {
  const { isLoading, error, isError, data, isFetchingNextPage, isFetching , hasNextPage, fetchNextPage } = useInfiniteQuery(
    ["colors"],
    fetchColors,
    {
      getNextPageParam: (_lastPage, allPages) => {
        if (allPages.length < 5) {
          return allPages.length + 1;
        }
        return undefined;
      },
    }
  );

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>{error.message}</div>;

  return (
    <div className="lists">
      <h2>Colors</h2>
      {data.pages.map((colors, idx) => (
       <Fragment key={idx}>
        {colors.data.map(color =>  <div key={color.id}>{color.name}</div>)}
       </Fragment>
      ))}
      <div>
        {isFetching && !isFetchingNextPage ? "Fetching..." : null}
      </div>
      <button disabled={!hasNextPage} onClick={fetchNextPage}>Load More</button>

    </div>
  );
}
