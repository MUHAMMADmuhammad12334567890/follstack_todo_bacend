const  Todo = require('../TodoModels/todoModul')


module.exports.todoController = {
 postTodoController: (req, res) => {
    Todo.create({
        todo: req.body.todo,
        compleyted: req.body.compleyted
    })
    .then((data) => {
        res.json(data)
    })
    .catch((error) => {
        res.json(error.message)
    })
 },





 getTodoController: async (req, res) => {
try {
    const getTodo = await Todo.find()
    res.json(getTodo)
} catch (error) {
    res.json(error)
}

},


patchTodoController: (req, res) => {
    Todo.findByIdAndUpdate(req.params.id, {
        todo: req.body.todo,
        compleyted: req.body.compleyted
    }, {new: true} ).then((data) => {
        res.json(data)
    }).catch((error) => {
        res.json(error.message)
    })

},

deleteTodoController: async (req, res ) => {
    try {
        const deleteTodo = await Todo.findByIdAndRemove(req.params.id)  
        res.json('Удалено')
    } catch (error) {
        res.json(error.message)
    }


}

}