//requires
const mongoose = require("mongoose");

//mongoose setup
mongoose.set("debug", true);
mongoose.connect("mongodb://localhost/todo-api");
mongoose.Promise = Promise; //lets us use promise syntax on db

module.exports.Todo = require("./todo");
