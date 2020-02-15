var express = require('express');
var router = express.Router();
var cardService = require('../services/cardService');



/* GET home page. */
router.get('/', function(req, res, next) {
  cardService.getCardsByClassName("Rogue")
      .then(cards => {
        res.render('index', { cards: cards });
      });
});

module.exports = router;
