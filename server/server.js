var express = require('express');
var router = require('./router.js');
var app = express();

app.get('/', function(req, res) {
  res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8080');
  res.send("Welcome to Gotham");
});
// app.use('/*', router);
app.listen(3000, function() {
  console.log('Express Server listening on port 3000');
});