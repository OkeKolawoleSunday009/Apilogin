const bodyParser = require("body-parser");
const express = require("express");
const request = ("request");

const app = express();
app.use(express.static("public"));
//specify the static fodler or css
app.use(bodyParser.urlencoded({extended: true}));



app.get("/", function(req, res){
    res.sendFile(__dirname + "/Signup.html")
})

app.post("/", function(req, res){
    var fullName = req.body.fname;
    var email= req.body.email;
    var password = req.body.password;

    console.log(fullName, email, password);
    
});










app.listen(3000, function(){
    // console.log(statusCode);
    console.log("server is listening on port 3000")
})