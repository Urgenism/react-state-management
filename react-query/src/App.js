import Posts from "./Posts";
import { useGetPosts } from "./usePosts";

function App() {
  const { status } = useGetPosts();

  if (status === "loading") {
    return <div>Loading......</div>;
  }

  if (status === "error") {
    return <div>Unable to load data</div>;
  }

  return <Posts />;
}

export default App;
