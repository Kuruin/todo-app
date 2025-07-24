const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect('mongodb+srv://ce23manavjitsinghtanda:HXtzXfdjNhuB8mvL@cluster0.rqfcx.mongodb.net/public_todo_app?retryWrites=true&w=majority&appName=Cluster0');
    console.log('Mongooese database connected');
}
const todoSchema = mongoose.Schema({
    name: String,
    description: String
});

const todo = mongoose.model('Todos', todoSchema);

module.exports = {
    todo,
    connectDB
}