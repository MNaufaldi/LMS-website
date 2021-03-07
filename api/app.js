const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb://localhost:27017/testDB", {useNewUrlParser: true, useUnifiedTopology: true});

const testSchema = {
    name: String,
    spec1: String,
    spec2: String
};

const Test = mongoose.model("Test", testSchema);

// Req all

app.route("/tests")
.get(function(req, res){
    Test.find(function(err, foundReq){
        if(!err){
            res.send(foundReq);
        }else{
            res.send(err);
        }
        
    });
})
.post(function(req, res){
    const newTest = new Test({
        name: req.body.title,
        spec1: req.body.content,
        spec2: "spec2"
    });

    newTest.save(function(err){
        if(!err){
            res.send("Sucess");
        } else {
            res.send(err);
        }
    });
})
.delete(function(req, res){
    Test.deleteMany(function(err){
        if(!err){
            res.send("Success");
        } else {
            res.send(err);
        }
    });
});

// Req specific

app.route("/tests/:name")

.get(function(req, res){ 
    Test.findOne({name: req.params.name}, function(err, found){
        if(found){
            res.send(found);
        } else {
            res.send("Not found")
        }
    });
})
.put(function(req, res){
    Test.findOneAndUpdate(
        {name: req.params.name},
        {name: req.body.title, spec1: req.body.content, spec2: "spec2"},
        function(err){
            if(!err){
                res.send("Updated!");
            } else {
                res.send(err);
            }
        }       
    );
})
.patch(function(req, res){
    Test.findOneAndUpdate(
        {name: req.params.name},
        {$set: req.body},
        function(err){
            if(!err){
                res.send("Patched!");
            } else {
                res.send(err);
            }
        }
    );
})
.delete(function(req, res){
    Test.deleteOne(
        {name: req.params.name},
        function(err){
            if(!err){
                res.send("Deleted");
            } else {
                res.send(err);
            }
        }
    );
});


app.listen(3000, function(){
    console.log("Server started on port 3000");
});