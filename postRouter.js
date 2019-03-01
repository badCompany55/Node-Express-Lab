const express = require("express");

const posts = require("./data/db.js");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const allPosts = await posts.find();
    res.status(200).json(allPosts);
  } catch (err) {
    res
      .status(500)
      .json({ error: "The posts information could not be retrieved" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const post = await posts.findById(req.params.id);
    console.log(post.length);
    post.length > 0
      ? res.status(200).json(post)
      : res
          .status(404)
          .json({ message: "The post with the specified ID does not exist" });
  } catch (err) {
    res
      .status(500)
      .json({ error: "The post information could not be retrieved." });
  }
});

// router.post("/", async (req, res) => {
// 	try [
// 		const post = await posts
// 	]
// })

module.exports = router;
