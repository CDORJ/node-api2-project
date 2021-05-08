// implement your server here
const express = require("express");
const server = express();
// require your posts router and connect it here
const postsRouter = require("./posts/posts-router");

server.use(express.json());
server.use("/api/posts", postsRouter);

server.use("/", (req, res) => {
  res.status(200).json({
    message:
      "Server is up and running correctly. Please visit http://localhost:4000/api/posts to continue.",
  });
});

module.exports = server;
