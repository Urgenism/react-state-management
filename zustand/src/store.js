import create from "zustand";
import axios from "axios";

const useStore = create((set, get) => ({
  status: "idle",
  data: null,
  error: null,
  getPosts: async () => {
    set({ status: "pending" });
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      set({ data: res.data, status: "success" });
    } catch (err) {
      set({ error: err.message, status: "failed" });
    }
  },
}));

export default useStore;
