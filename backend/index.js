const express = require('express');
const app = express();
const port = 3000;
const { todo, connectDB } = require('./db/db')

connectDB();
app.get("", (req, res) => {
    res.json({ msg: "Hello World" })
})
app.listen(port, () => console.log("Server is up on port " + port));
