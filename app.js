const express = require("express");
const client = require("./connection");
client.main();
const app = express();

const { readFileSync } = require("fs");

const home = readFileSync("./build/index.html" );

app.use(express.static("./build"));

app.get("/", (req, res) => {
    res.sendFile("./build/index.html", {root: __dirname});
});

app.get("/register", (req, res) => {
    res.sendFile("./build/register.html", { root: __dirname});
});

app.get("/operations", (req, res) => {
    res.sendFile("./build/operations.html", {root: __dirname});
});

app.post("/form_post", (req, res) => {
    console.log(req.body);
});

app.get("/register/query", (req, res) => {
    console.log(req.query);
    res.send("<h1>Thank you</h1>");
});

app.get("*", (req, res) => {
    res.send("404 File Not Found").status(404);
});

app.listen(5000, () => {
    console.log("app listening in port 5000");
});
