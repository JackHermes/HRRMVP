var express = require('express');
var router = require('./router.js');
var app = express();

app.use('/', router);
// app.use('/*', router);
app.listen(8080, function() {
  console.log('Express Server listening on port 8080');
});