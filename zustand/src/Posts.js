import React from "react";

import Post from "./Post";
import useStore from "./store";

const Posts = () => {
  const data = useStore((state) => state.data);

  console.log(data, "data");

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
