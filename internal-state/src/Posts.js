import React from "react";
import Post from "./Post";

const Posts = ({ data, status }) => {
  return (
    <ul>
      {data?.length
        ? data.map((item) => {
            return <Post item={item} key={item.id} status={status} />;
          })
        : null}
    </ul>
  );
};

export default Posts;
