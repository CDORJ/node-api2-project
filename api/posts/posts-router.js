// implement your posts router here
const express = require("express");
const postsRouter = express.Router();
const posts = require("./posts-model");

postsRouter.get("/", async (req, res) => {
  try {
    const post = await posts.find();
    res.status(200).json(post);
  } catch (err) {
    res
      .status(500)
      .json({ message: "The posts information could not be retrieved" });
  }
});

module.exports = postsRouter;
