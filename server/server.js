var express = require('express');
var router = require('./router.js');
var app = express();

app.get('/', function(req, res) {
  res.send("text");
});
// app.use('/*', router);
app.listen(3000, function() {
  console.log('Express Server listening on port 3000');
});