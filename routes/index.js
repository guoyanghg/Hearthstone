var express = require('express');
var router = express.Router();
var cardService = require('../services/cardService');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("index");
});

module.exports = router;
