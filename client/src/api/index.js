import axios from "axios";

const baseUrl = "http://localhost:5000";

export const fetchPosts = () => {
  axios.get(`${baseUrl}/posts`);
};
