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
router.get('/class/:classname/:cardname', function(req, res, next) {
    const cardname = req.params.cardname;
    cardService.getCardByName(cardname)
        .then(card=>{
            console.log(card);
            res.render('singlecard', {card: card});
        });
});

router.get('/class/:classname', function(req, res, next) {
    var classname = req.params.classname;
    var pageNum = req.query.pageNum || 1;
    console.log(pageNum);
    const nameCapitalized = classname.charAt(0).toUpperCase() + classname.slice(1);
    cardService.getCardsByClassName(nameCapitalized, pageNum, 12)
        .then(resultobj => {
            console.log(req.baseUrl + req.path);
            res.render('cards', {
                cards: resultobj.cards,
                title: nameCapitalized,
                pageNum: pageNum,
                url: req.baseUrl + req.path,
                totalNum: resultobj.totalNum
            });
        });

});



router.get('/class', function(req, res, next) {
    res.render("class");
});

module.exports = router;
