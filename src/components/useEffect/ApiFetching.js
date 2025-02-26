import React, { useEffect, useState } from "react";

export const ApiFetching = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts`
        );
        if (!response.ok) {
          throw new Error("fetching failed");
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      }
    };
    fetchData();
  }, []);
  if (error) return <p>{error}</p>;
  return (
    <div>
      {data?.map((post) => {
        return <div key={post.id}>{post.title}</div>;
      })}
    </div>
  );
};
