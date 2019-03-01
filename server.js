const express = require("express")

const server = express();

const postRouter = require("./postRouter.js")

server.use(express.json())
server.use("/api/posts", postRouter)

server.get("/", (req, res) => {
	res.send(`
	<h2>Zachs Posts API</h2>
	<p>Welcome to Zachs Posts Api</p>
	`)
})

module.exports = server;
