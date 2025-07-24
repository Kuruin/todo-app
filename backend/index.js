const express = require('express');
const app = express();
const port = 3000;
const { todo, connectDB } = require('./db/db')
const { todoFormat } = require('./types')

connectDB();
app.use(express.json());

app.post("/add-todo", async (req, res) => {
    const payload = req.body;
    const { name, description } = payload;
    const validTodo = todoFormat.safeParse(payload);

    if (!validTodo.success) {
        res.status(404).json({ error: "Name and description must be string" });
        return
    }
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

app.get("/todos", async (req, res) => {
    try {
        const Todos = await todo.find({})
        res.json({
            Todos
        })
    } catch (err) {
        res.json({ error: "Cant fetch the todos, server busy!" })
    }
})

app.post("/delete-todo", async (req, res) => {
    const id = req.body.id;
    try {
        const status = await todo.findByIdAndDelete({
            _id: id
        })
        if (!status) {
            res.json({ error: "No todo found" })
        }
        res.json({ msg: "Todo deteted successfully" })

    } catch (err) {
        res.json({ error: "Couldnt delete, server issue" })
    }
})

app.listen(port, () => console.log("Server is up on port " + port));
