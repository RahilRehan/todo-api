const express = require("express"),
    app = express(),
    PORT = 8080 | process.env.PORT,
    todoRouter = require("./routes/todo.js"),
    bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/todo", todoRouter);

app.get("/", (req, res) => {
    res.send({ name: "rahil rehan" });
});

app.listen(PORT, () => {
    console.log(`Server up and runining at ${PORT}`);
});
