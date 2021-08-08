import React from "react";

import { useGetPosts } from "./usePosts";

const Post = ({ item }) => {
  const { status } = useGetPosts();

  return (
    <li style={{ marginBottom: "2rem" }}>
      <strong>{item.title}</strong>
      <p style={{ margin: 0 }}>{item.body}</p>
      <span>{status}</span>
    </li>
  );
};

export default Post;
