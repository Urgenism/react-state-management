import { useEffect, useState } from "react";
import axios from "axios";

import Posts from "./Posts";

function App() {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  useEffect(() => {
    setStatus("pending");
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setData(response.data);
        setStatus("success");
      })
      .catch((err) => {
        setError(err);
        setStatus("failed");
      });
  }, []);

  if (status === "pending") {
    return <div>Loading......</div>;
  }

  if (status === "failed" || error) {
    return <div>Unable to load data</div>;
  }

  return <Posts data={data} status={status} />;
}

export default App;
