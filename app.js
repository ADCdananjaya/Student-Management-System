const express = require("express");
// const { client } = require("./connection");
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
    // client.db("test").collection("students").insertOne({name: req.query.name, age: req.query.age, university: req.query.univeristy});
    res.sendFile("./build/register.html", {root: __dirname});
});

app.get("/api/students", (req, res) => {
    res.send([{name: "lucifer", age: 22}, {name: "chamod", age: 23}, {name: "tharu", age: 23}, {name: "john", age: 27}]);
});

app.post("/api/students", (req, res) => {
    console.log(req.body);
});

app.get("*", (req, res) => {
    res.send("404 File Not Found").status(404);
});

app.listen(5000, () => {
    console.log("app listening in port 5000");
});
