// implement your server here
const express = require('express');
const server = express();


// require your posts router and connect it here
const PostRouter = require('./posts/posts-router.js');
server.use(express.json());
server.use('/api/post', PostRouter);

module.exports = server;