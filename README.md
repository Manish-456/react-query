## React Query
A library for fetching data in a React application.

### Why React Query?
- Since React is a UI library, there is no specific pattern for data fetching.
- `useEffect` hook for data fetching and useState hook to maintain component state like loading, error or resulting data.
- If the data is needed throughout the app, we tend to use state management libraries.
- Most of the state management libraries are good for working with client state. Example: 'theme' for the application or whether a modal is open.
- State management libraries are not great for working with `asynchronous or server state`.
  
### Client vs Server state
`Client state`
- Persisted in app memory and accessing or updating it is synchronous.
  

`Server state`
- Persisted remotely and requires asynchronous APIs for fetching or updating.
- Has shared ownership.
- UI data may not be in sync with the remote data.
- Challenging when we have to deal with caching, deduping multiple requests for the same data, updating stale data in the background, performance optimizations etc.

### CONTENT
- Basic queries
- Poll data
- RQ dev tools
- Create reusable query hooks
- Query by ID
- Parallel queries
- Dynamic queries
- Dependent queries
- Infinite & paginated queries
- Update data using mutations
- Invalidate queries
- Optimistic updates
- Axios interceptor