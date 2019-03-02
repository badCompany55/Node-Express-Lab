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

router.post("/", async (req, res) => {
  try {
    if (req.body.title && req.body.contents) {
      const post = await posts.insert(req.body);
      res.status(201).json({ newPost: req.body });
    } else {
      res.status(400).json({
        errorMessage: "Please Provide title and contents for the post"
      });
    }
  } catch (err) {
    res.status(500).json({
      error: "The was an error while saving the post to the database"
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    if (req.body.title && req.body.contents) {
      const post = await posts.update(req.params.id, req.body);
      post
        ? res.status(200).json(req.body)
        : res
            .status(404)
            .json({ error: "The post with the specified ID does not exist." });
    } else {
      res.status(400).json({
        errorMessage: "Please provide title and contents for the post."
      });
    }
  } catch (err) {
    res
      .status(500)
      .json({ error: "The post information could not be modified." });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const post = await posts.remove(req.params.id);
    post
      ? res.status(200).json({ deleted: post })
      : res
          .status(404)
          .json({ message: "The post with the specified ID does not exist." });
  } catch (err) {
    res.status(500).json({ error: "The post could not be removed." });
  }
});

module.exports = router;
