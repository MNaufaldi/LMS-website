const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb://localhost:27017/testDB", {userNewUrlParser: true});

const testSchema = {
    name: String,

};

const Test = mongoose.model("Test", testSchema);


app.listen(3000, function(){
    console.log("Server started on port 3000");
});