import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Posts from "./Posts";
import { getPosts } from "./postsSlice";

function App() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  if (status === "pending") {
    return <div>Loading......</div>;
  }

  if (status === "failed" || error) {
    return <div>Unable to load data</div>;
  }

  return <Posts />;
}

export default App;
