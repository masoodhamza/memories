import axios from "axios";

const baseURL = "http://localhost:5000";

export const fetchPosts = async () => {
  const data = await axios.get(`${baseURL}/posts`);
  return data;
};

export const createPost = async (newPost) => {
  const data = await axios.post(`${baseURL}/posts`, newPost);
  return data;
};
