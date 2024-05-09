import { useQuery } from "@tanstack/react-query";
import { Post, fetchPosts } from "./api/post";

function App() {
  const { data, isLoading, error } = useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

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
