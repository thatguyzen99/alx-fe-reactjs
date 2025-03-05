import React from "react";
import { useQuery } from "react-query";

// Function to fetch posts from the API
const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};

const PostsComponent = () => {
  const { data, error, isLoading, isFetching, isError, refetch } = useQuery(
    "posts",
    fetchPosts
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Posts</h2>
      {isFetching && <p>Updating in background...</p>}
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      <button onClick={refetch}>Refetch Posts</button>
    </div>
  );
};

export default PostsComponent;
