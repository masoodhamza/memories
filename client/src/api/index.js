import axios from "axios";

const baseURL = "http://localhost:5000";

export const fetchPosts = async () => {
  const data = await axios.get(`${baseURL}/posts`);
  return data;
};
