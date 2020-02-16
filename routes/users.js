var express = require('express');
var router = express.Router();
var cardService = require('../services/cardService');

var cardsfortesting = [{
    "cardId": "EX1_116",
    "dbfId": "559",
    "name": "Leeroy Jenkins",
    "cardSet": "Classic",
    "type": "Minion",
    "faction": "Alliance",
    "rarity": "Legendary",
    "cost": 5,
    "attack": 6,
    "health": 2,
    "text": "<b>Charge</b>. <b>Battlecry:</b> Summon two 1/1 Whelps for your opponent.",
    "flavor": "At least he has Angry Chicken.",
    "artist": "Gabe from Penny Arcade",
    "collectible": true,
    "elite": true,
    "playerClass": "Neutral",
    "img": "http://media.services.zam.com/v1/media/byName/hs/cards/enus/EX1_116.png",
    "imgGold": "http://media.services.zam.com/v1/media/byName/hs/cards/enus/animated/EX1_116_premium.gif",
    "locale": "enUS",
    "mechanics": [
        {
            "name": "Charge"
        },
        {
            "name": "Battlecry"
        }
    ]
},{
    "cardId": "EX1_116",
    "dbfId": "559",
    "name": "Leeroy Jenkins",
    "cardSet": "Classic",
    "type": "Minion",
    "faction": "Alliance",
    "rarity": "Legendary",
    "cost": 5,
    "attack": 6,
    "health": 2,
    "text": "<b>Charge</b>. <b>Battlecry:</b> Summon two 1/1 Whelps for your opponent.",
    "flavor": "At least he has Angry Chicken.",
    "artist": "Gabe from Penny Arcade",
    "collectible": true,
    "elite": true,
    "playerClass": "Neutral",
    "img": "http://media.services.zam.com/v1/media/byName/hs/cards/enus/EX1_116.png",
    "imgGold": "http://media.services.zam.com/v1/media/byName/hs/cards/enus/animated/EX1_116_premium.gif",
    "locale": "enUS",
    "mechanics": [
        {
            "name": "Charge"
        },
        {
            "name": "Battlecry"
        }
    ]
},{
    "cardId": "EX1_116",
    "dbfId": "559",
    "name": "Leeroy Jenkins",
    "cardSet": "Classic",
    "type": "Minion",
    "faction": "Alliance",
    "rarity": "Legendary",
    "cost": 5,
    "attack": 6,
    "health": 2,
    "text": "<b>Charge</b>. <b>Battlecry:</b> Summon two 1/1 Whelps for your opponent.",
    "flavor": "At least he has Angry Chicken.",
    "artist": "Gabe from Penny Arcade",
    "collectible": true,
    "elite": true,
    "playerClass": "Neutral",
    "img": "http://media.services.zam.com/v1/media/byName/hs/cards/enus/EX1_116.png",
    "imgGold": "http://media.services.zam.com/v1/media/byName/hs/cards/enus/animated/EX1_116_premium.gif",
    "locale": "enUS",
    "mechanics": [
        {
            "name": "Charge"
        },
        {
            "name": "Battlecry"
        }
    ]
}];


/* GET users listing. */

router.get('/rogue', function(req, res, next) {
  cardService.getCardsByClassName("Rogue")
      .then(cards => {
         res.render('rogue', { cards: cardsfortesting });
      });
});

module.exports = router;
