import { useFetchPostsQuery } from "./redux/api/postsApi";

function App() {
  const { data, error, isLoading } = useFetchPostsQuery();

  return (
    <>
      {data && data.length > 0 && (
        <div>
          <h1>{data[0].title}</h1>
          <p>{data[0].description}</p>
          <p>{data[0].explanation}</p>
          <p>{data[0].solution}</p>
        </div>
      )}
    </>
  );
}

export default App;
