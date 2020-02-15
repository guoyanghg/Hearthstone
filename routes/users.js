var express = require('express');
var router = express.Router();
var cardService = require('../services/cardService');



cardService.getCardsByClassName("Rogue")
    .then(cards => console.log(cards));

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
