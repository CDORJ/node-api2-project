// implement your posts router here
const router = require("express").Router();
const Post = require("./posts-model.js");

router.get("/", async (req, res) => {
  try {
    const post = await Post.find();
    res.status(200).json(post);
  } catch (err) {
      res.status(500).json({message: "The posts information could not be retrieved"})
  }
});

module.exports = router;
