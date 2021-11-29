import PostModel from "../models/post.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await PostModel.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const postBody = req.body;

  const newPostImage = new PostModel(postBody);

  try {
    await newPostImage.save();
    res.status(200).json(newPostImage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
