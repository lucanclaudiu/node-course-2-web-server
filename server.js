const express = require("express");

var app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", (reqest, response)=>{

    response.send('<h1>Hllo World</h1>>');
});

app.listen(3000);