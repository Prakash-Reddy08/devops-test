const express = require("express");

const PORT = 3000;
const app = express();

app.get("/", (req, res) => {
    res.send("wass up nigga")
})


app.listen(PORT, () => {
    console.log("app running on PORT " + PORT);
})