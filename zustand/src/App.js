import { useEffect } from "react";

import Posts from "./Posts";
import useStore from "./store";

function App() {
  const status = useStore((state) => state.status);
  const getPosts = useStore((state) => state.getPosts);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  if (status === "pending") {
    return <div>Loading......</div>;
  }

  if (status === "failed") {
    return <div>Unable to load data</div>;
  }

  return <Posts />;
}

export default App;
