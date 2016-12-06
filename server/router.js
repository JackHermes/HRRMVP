var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  // build/delegateBuild of react webpage
  // send results as html to client on req
  res.send('Welcome to Gotham');
});

module.exports = router;