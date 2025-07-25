const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://ce23manavjitsinghtanda:HXtzXfdjNhuB8mvL@cluster0.rqfcx.mongodb.net/public_todo_app?retryWrites=true&w=majority&appName=Cluster0');
        console.log('Mongooese database connected');
    } catch (err) {
        console.error('MongoDB connection failed:', err);
        process.exit(1);
    }
}
const todoSchema = new mongoose.Schema({
    name: String,
    description: String
});

const todo = mongoose.model('Todos', todoSchema);

module.exports = {
    todo,
    connectDB
}