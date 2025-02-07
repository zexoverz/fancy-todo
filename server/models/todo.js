const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    title: String,
    description: String,
    status: String,
    dueDate: Date,
    username: String
});

const todo = mongoose.model("Todo", todoSchema)

module.exports = todo;