const db = require("../models")

exports.getTodos = (req, res) => {
    db.Todo.find()
    .then((todos)=>{
        res.json(todos)
    })
    .catch((error)=>{
        console.log(err)
        res.send(err)
    })
}

exports.createTodo = (req, res) => {
    db.Todo.create(req.body)
    .then((newTodo)=>{
        res.json(newTodo)
    })
    .catch((err)=>{
        console.log(err)
    })
}

exports.getTodo = (req, res) => {
    db.Todo.findById(req.params.todoId)
    .then((foundTodo)=>{
        res.json(foundTodo)
    })
    .catch((err)=>{
        console.log(err)
    })
}

exports.updateTodo = (req, res)=>{
    db.Todo.findByIdAndUpdate({_id:req.params.todoId}, req.body)
    .then((todo)=>{
        res.json(todo)
    })
    .catch((err)=>{
        console.log(err)
    })
}

exports.deleteTodo = (req, res)=>{
    db.Todo.remove({_id:req.params.todoId})
    .then(()=>{
        res.json("Deleted succesufully")
    })
    .catch((err)=>{
        console.log(err)
    })
}