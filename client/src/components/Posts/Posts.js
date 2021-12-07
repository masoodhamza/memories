import React from "react";
import Post from "./Post/Post";
import { useSelector } from "react-redux";

const Posts = () => {
  const data = useSelector((store) => store.posts);
  console.log("Posts -> data", data);

  return (
    <div>
      <Post />
      <Post />
    </div>
  );
};

export default Posts;
