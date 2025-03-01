import Post from "../models/post.model.js";
import User from "../models/user.model.js";

export const post = async (req, res) => {
  const { title, content } = req.body;
  const post = new Post({ user: req.user.id, title, content });

  await post.save();
  await User.findByIdAndUpdate(req.user.id, { $push: { posts: post._id } });
  res.status(201).json({ message: "Post created" });
};
