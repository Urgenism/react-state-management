import React from "react";
import { useSelector } from "react-redux";

const Post = ({ item }) => {
  const status = useSelector((state) => state.posts.status);

  return (
    <li style={{ marginBottom: "2rem" }}>
      <strong>{item.title}</strong>
      <p style={{ margin: 0 }}>{item.body}</p>
      <span>{status}</span>
    </li>
  );
};

export default Post;
