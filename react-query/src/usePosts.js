import { useQuery } from "react-query";
import axios from "axios";

const getPosts = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return response.data;
};

export const useGetPosts = () => {
  return useQuery("posts", getPosts);
};
