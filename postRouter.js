const express = require("express")

const posts = require("./data/db.js")

const router = express.Router();

router.get("/", async (req, res) => {
	try {
		const allPosts = await posts.find()
		console.log(allPosts)
		res.status(200).json(posts)
	} catch(err) {
		res.status(500).json({error: "The posts information could not be retrieved"})
	}
})

// router.post("/", async (req, res) => {
// 	try [
// 		const post = await posts
// 	]
// })

module.exports = router;
