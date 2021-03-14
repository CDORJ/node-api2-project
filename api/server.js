// implement your server here
const express = require("express");
const server = express();
// require your posts router and connect it here

const PostsRouter = require("./posts/posts-router.js");
server.use(express.json());
server.use("/api/post", PostsRouter);

server.get("/", async (req, res) => {
  res.json({ message: "You've arrived!" });
});

module.exports = server;
