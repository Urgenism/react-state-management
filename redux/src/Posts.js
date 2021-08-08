import React from "react";
import { useSelector } from "react-redux";

import Post from "./Post";

const Posts = () => {
  const data = useSelector((state) => state.posts.data);

  return (
    <ul>
      {data?.length
        ? data.map((item) => {
            return <Post item={item} key={item.id} />;
          })
        : null}
    </ul>
  );
};

export default Posts;
