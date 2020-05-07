const express = require("express"),
    router = express.Router(),
    db = require("../models/index.js"),
    helpers = require("../helpers/todos.js");

router.route("/").get(helpers.getTodos).post(helpers.createTodo);

router
    .route("/:todoId")
    .get(helpers.findTodo)
    .put(helpers.updateTodo)
    .delete(helpers.deleteTodo);

module.exports = router;
