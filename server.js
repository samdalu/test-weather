var express = require('express');
var app = express();
var router = express.Router();

app.use(express.static(__dirname + "/index"));


app.listen(3000);
console.log("Server running on port 3000");
