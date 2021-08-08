import React from "react";
import Post from "./Post";

import { useGetPosts } from "./usePosts";

const Posts = () => {
  const { data } = useGetPosts();

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
