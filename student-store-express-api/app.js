const express = require("express")
const morgan = require("morgan")
const Store = require("./routes/store")
const app = express()

app.use(morgan("tiny"))
app.use(express.json())

app.get('/store', Store);
app.get('/store/:productId', Store);

app.get("/", (req, res) => {
    res.status(200).json({"ping":"pong"})
})

module.exports = app