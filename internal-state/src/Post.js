import React from "react";

const Post = ({ item, status }) => {
  return (
    <li style={{ marginBottom: "2rem" }}>
      <strong>{item.title}</strong>
      <p style={{ margin: 0 }}>{item.body}</p>
      <span>{status}</span>
    </li>
  );
};

export default Post;
