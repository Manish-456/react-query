import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";

const fetchColors = (pageNum) =>
  axios.get(`http://localhost:3000/colors?_limit=2&_page=${pageNum}`);

export default function InfiniteQueriesPage() {
  const [pageNumber, setPageNumber] = useState(1);

  const { isLoading, error, data } = useQuery(["colors", pageNumber], () => fetchColors(pageNumber), {
    keepPreviousData : true
  });

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>{error.message}</div>;

  return (
    <div className="lists">
      <h2>Colors</h2>
      {data.data.map((color) => (
        <div key={color.id}>
          <p
            style={{
              color: color.name.toLowerCase(),
            }}
          >
            {color.name}
          </p>
        </div>
      ))}
      <button type="button" disabled={pageNumber === 1} onClick={() => setPageNumber(prevPage => prevPage - 1)}>Prev Page</button>{" "}
      <button type="button" disabled={pageNumber === 6} onClick={() => setPageNumber(prevPage => prevPage + 1)}>Next Page</button>
    </div>
  );
}
