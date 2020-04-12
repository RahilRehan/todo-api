const express = require("express"),
    app     = express(),
    bodyParser = require("body-parser"),
    todoRouter = require("./routes/todos"),
    PORT    = 8080 || process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.use("/api/todo", todoRouter);

app.get("/", (req, res) => {
    res.send("Hello from ROOT");
})

app.get("/json", (req, res) => {
    res.json({Name: "Rahil", class:"CG3"})
})

app.listen(PORT, () =>{
    console.log(`Sever running on port ${PORT}`)
})