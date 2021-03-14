// implement your posts router here
const router = require("express").Router();
const { Database } = require("sqlite3");
const Post = require("./posts-model.js");

/* get /api/posts
- returns an array of all the posts obkects contained in the database

- if there's an ERROR retrieving the posts from the database
   - respond with HTTP 500
   - return the following JSON: { message: "The posts information could not be retrieved" }.

   -----------------------------------------------
*/

router.get("/", (req, res) => {});
module.exports = router;

/* get /api/posts/:id
- returns the post object with the specified id

-**if the post with the specified id is not found**:

- return HTTP status code 404 (Not Found).
- return the following JSON: { message: "The post with the specified ID does not exist" }.

-**if there's an error in retrieving the post from the database**:

-respond with HTTP status code 500.
-return the following JSON: { message: "The post information could not be retrieved" }.

-----------------------------------------------
*/

/* post /api/posts

- creates a post using the information sent inside the request body and returns the newly created post object

- *** if the request body is missing the title or contents property ***:

- respond with HTTP status code 400 (Bad Request).
- return the following JSON: { message: "Please provide title and contents for the post" }.

- *** if the information about the post is valid ***:

- save the new post the the database.
- return HTTP status code 201 (Created).
- return the newly created post.

- *** if there's an error while saving the post: ***

- respond with HTTP status code 500 (Server Error).
- return the following JSON: { message: "There was an error while saving the post to the database" }.

-----------------------------------------------

*/

/* put /api/posts/:id
- updates the post with the specified id using data from the request body and returns the modified document, not the original

- *** if the post with the specified id is not found: ***

- return HTTP status code 404 (Not Found).
- return the following JSON: { message: "The post with the specified ID does not exist" }.

- *** if the request body is missing the title or contents property: *** 

- respond with HTTP status code 400 (Bad Request).
- return the following JSON: { message: "Please provide title and contents for the post" }.

- *** if there's an error when updating the post: ***

- respond with HTTP status code 500.
- return the following JSON: { message: "The post information could not be modified" }.

*** - if the post is found and the new information is valid: ***

- update the post document in the database using the new information sent in the request body.
- return HTTP status code 200 (OK).
- return the newly updated post.

-----------------------------------------------
*/

/* delete /api/posts/:id
- removes the post with the specified id and returns the deleted post object

*** - if the post with the specified id is not found: ***

- return HTTP status code 404 (Not Found).
- return the following JSON: { message: "The post with the specified ID does not exist" }.

*** if there's an error in removing the post from the database: ***

- respond with HTTP status code 500.
- return the following JSON: { message: "The post could not be removed" }.
-----------------------------------------------
*/

/* get /api/posts/:id/comments

- returns an array of all the comment objects associated with the post with the specified id

*** if the post with the specified id is not found:***

- return HTTP status code 404 (Not Found).
- return the following JSON: { message: "The post with the specified ID does not exist" }.

*** if there's an error in retrieving the comments from the database:***

- respond with HTTP status code 500.
- return the following JSON: { message: "The comments information could not be retrieved" }.
-----------------------------------------------
*/
