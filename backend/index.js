const express = require('express');
const app = express();
const port = 3000;
const { todo, connectDB } = require('./db/db')

connectDB();
app.use(express.json());

app.post("/add-todo", async (req, res) => {
    const { name, description } = req.body;
    try {
        if (!name || !description) {
            res.json({ msg: "Name and description is required" })
            return
        }
        const duplicateTodo = await todo.findOne({ name, description })
        if (!duplicateTodo) {
            const newTodo = await todo.create({
                name,
                description
            })
            if (!newTodo) {
                res.json({ error: "Todo not created" })
                return
            }
            res.json({ msg: "Todo created" })
            return
        }
        res.json({ error: "Todo already exists" })
    } catch (err) {
        res.json({ error: "Server side error" })
    }
})
app.listen(port, () => console.log("Server is up on port " + port));
