const { userName, password } = require("./credentials");
const { MongoClient } = require("mongodb");
const uri = `mongodb+srv://${userName}:${password}@mycluster.kxb0rwl.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri);
client.connect();
// client.db("test").collection("students").insertOne({name: "devon", age: 20, univeristy: "UOJ"});
// console.log("successfully added!");

module.exports = { client };