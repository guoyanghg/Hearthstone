var express = require('express');
var router = express.Router();
var cardService = require('../services/cardService');
var cardsBuffter = [];
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

router.get('/class/:classname', function(req, res, next) {
    var classname = req.params.classname;
    const nameCapitalized = classname.charAt(0).toUpperCase() + classname.slice(1);
    cardService.getCardsByClassName(nameCapitalized)
        .then(cards => {
            cardsBuffter = cards;
            res.render('cards', { cards: cardsBuffter, title: nameCapitalized});
        });
});

router.get('/class/:classname/:pagenum', function(req, res, next) {
    var classname = req.params.classname;
    const pagenum = req.params.pagenum;
    if(cardsBuffter.length !== 0){

    }
});

router.get('/class', function(req, res, next) {
    res.render("class");
});

module.exports = router;
