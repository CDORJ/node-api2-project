// implement your posts router here
const express = require("express");
const { route } = require("../server");
const router = express.Router();
const Posts = require("./posts-model");

router.get("/", async (req, res) => {
  try {
    const posts = await Posts.find();
    res.status(200).send(posts);
  } catch (error) {
    res
      .status(500)
      .json({ message: "The posts information could not be retrieved" });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const specificPost = await Posts.findById(id);

    if (specificPost) {
      res.status(200).send(specificPost);
    } else {
      res
        .status(404)
        .json({ message: "The post with the specified ID does not exist" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "The post information could not be retrieved" });
  }
});

router.post("/", async (req, res) => {
  const newPostInfo = req.body;

  try {
    if (!newPostInfo.title || !newPostInfo.contents) {
      res
        .status(400)
        .json({ message: "Please provide title and contents for the post" });
    } else {
      const createdPost = await Posts.insert(newPostInfo);
      const updatedPost = await Posts.findById(createdPost.id);
      res.status(201).json(updatedPost);
    }
  } catch (error) {
    res.status(500).json({
      message: "There was an error while saving the post to the database",
    });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  try {
    const confirmed = await Posts.update(id, changes);
    if (!changes.title || !changes.contents) {
      res
        .status(400)
        .json({ message: "Please provide title and contents for the post" });
    } else if (!confirmed) {
      res
        .status(404)
        .json({ message: "The post with the specified ID does not exist" });
    } else {
      const updatedPost = await Posts.findById(id);
      res.status(200).json(updatedPost);
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "The post information could not be modified" });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const postToDelete = await Posts.findById(id);

  try {
    const confirmed = await Posts.remove(id);

    if (!confirmed) {
      res
        .status(404)
        .json({ message: "The post with the specified ID does not exist" });
    } else {
      res.status(200).json(postToDelete);
    }
  } catch (error) {
    res.status(500).json({ message: "The post could not be removed" });
  }
});

router.get("/:id/comments", async (req, res) => {
  const { id } = req.params;
  const requestedPost = await Posts.findById(id);
  const comments = await Posts.findPostComments(id);

  try {
    if (!requestedPost) {
      res
        .status(404)
        .json({ message: "The post with the specified ID does not exist" });
    } else if (comments.length < 1) {
      res
        .status(200)
        .json({ message: "There are no comments for the requested post" });
    } else {
      res.status(200).json(comments);
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "The comments information could not be retrieved" });
  }
});

module.exports = router;
