// implement your posts router here
const router = require("express").Router();
const Post = require("./posts-model.js");

router.get("/", async (req, res) => {
  try {
    const post = await Post.find();
    res.status(200).json(post);
  } catch (err) {
    res
      .status(500)
      .json({ message: "The posts information could not be retrieved" });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const poster = await Post.findById(id);
    if (poster) {
      res.status(200).json(poster);
    } else {
      res.status(404).json({
        message: "The post with the specified ID does not exist",
      });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "The post with the specified ID does not exist" });
  }
});

router.post("/", async (req, res) => {
  const post = req.body;
  if (!post.title || !post.contents) {
    res
      .status(400)
      .json({ message: "Please provide title and contents for the post" });
  } else {
    try {
      const newPost = await Post.insert(post);
      res.status(201).json(newPost);
    } catch (err) {
      res.status(500).json({
        message: "There was an error while saving the post to the database",
      });
    }
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  if (!changes.title || !changes.contents) {
    res
      .status(400)
      .json({ message: "Please provide title and contents for the post" });
  } else {
    try {
      const updatedPost = await Post.update(id, changes);
      if (updatedPost) {
        res.status(200).json(updatedPost);
      } else {
        res.status(404).json({
          message: "The post with the specified ID does not exist",
        });
      }
    } catch (err) {
      res
        .status(500)
        .json({ message: "The post information could not be modified" });
    }
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.remove(id);
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({
        message: "The post with the specified ID does not exist",
      });
    }
  } catch (err) {
    res, status(500).json({ message: "The post could not be removed" });
  }
});

router.get("/:id/comments", async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findPostComments(id);
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({
        message: "The post with the specified ID does not exist",
      });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "The comments information could not be retrieved" });
  }
});

module.exports = router;
