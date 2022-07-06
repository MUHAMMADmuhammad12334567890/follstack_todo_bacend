const mongoose = require( "mongoose");

const todoSchema = mongoose.Schema({
    todo: String,
    compleyted: {
        default: false,
        type: Boolean
    }
})

const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo