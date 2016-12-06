var express = require('express');
var quotes = require('../db/quotes.js');
var router = express.Router();

router.get('/', function(req, res) {
  // build/delegateBuild of react webpage
  // send results as html to client on req
  res.send(quotes[0].q);
});

module.exports = router;