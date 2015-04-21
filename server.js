var express = require('express');
var app = express();

app.use('/',function(req, res){
  res.send("Hola, mundo!");
});

app.listen(3000);
console.log("Server running on port 3000");

module.exports = app;
