const mongoose = require("mongoose");

var main = () => {
    mongoose.connect("mongodb://localhost:27017/newdb", { useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log("successfully connected!");
        }
    });
}

module.exports = {main};