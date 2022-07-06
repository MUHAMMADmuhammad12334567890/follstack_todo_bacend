const {Router} = require('express')
const {todoController} = require('../TodoControllers/todoControllers')

const router =  Router()


router.post('/todo', todoController.postTodoController)
router.get('/todo', todoController.getTodoController)
router.patch('/todo/:id', todoController.patchTodoController)
router.delete('/todo/:id', todoController.deleteTodoController)

module.exports = router