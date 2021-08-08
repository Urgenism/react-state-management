import React from "react";

import useStore from "./store";

const Post = ({ item }) => {
  const status = useStore((state) => state.status);

  return (
    <li style={{ marginBottom: "2rem" }}>
      <strong>{item.title}</strong>
      <p style={{ margin: 0 }}>{item.body}</p>
      <span>{status}</span>
    </li>
  );
};

export default Post;
