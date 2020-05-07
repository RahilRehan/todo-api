const db = require("../models/index.js");

exports.getTodos = (req, res) => {
    db.Todo.find()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.send(err);
        });
};

exports.createTodo = (req, res) => {
    db.Todo.create(req.body)
        .then((data) => {
            res.status(201).json(data);
        })
        .catch((err) => console.log(err));
};

exports.findTodo = (req, res) => {
    db.Todo.findById(req.params.todoId)
        .then((todo) => {
            res.json(todo);
        })
        .catch((err) => console.log(err));
};

exports.updateTodo = (req, res) => {
    db.Todo.findByIdAndUpdate(req.params.todoId, req.body, { new: true })
        .then((todo) => res.json(todo))
        .catch((err) => console.log(err));
};

exports.deleteTodo = (req, res) => {
    db.Todo.remove({ _id: req.params.todoId })
        .then(() => res.send("Deleted the task!"))
        .catch((err) => console.log(err));
};

module.exports = exports;
