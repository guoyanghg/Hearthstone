var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("index", {activeItem: 0});
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render("contact", {activeItem: 1});
});

module.exports = router;
