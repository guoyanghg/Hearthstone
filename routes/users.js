var express = require('express');
var router = express.Router();
var cardService = require('../services/cardService');
var preDefinedData = require('../services/preDefinedData');


const playerClasses = preDefinedData.playerClasses;
const rarity = preDefinedData.rarity;


    /* GET users listing. */

/* for singlecard diplay. */
router.get('/singlecard/:cardname', function(req, res, next) {
    const cardname = req.params.cardname;
    cardService.getCardByName(cardname)
        .then(card=>{
            console.log(card);
            res.render('singlecard', {
                card: card,
                activeItem: -1
            });
        });
});

/*searching by playerclass. */
router.get('/class/:classname', function(req, res, next) {
    var classname = req.params.classname;
    classname = classname[0].toUpperCase() + classname.slice(1); /* Uppercase the first letter */
    var pageNum = req.query.pageNum || 1;
    var cost = req.query.cost;
    if(cost!==undefined){
        /* with cost filter. */
        cardService.getCardsByClassNameAndCost(classname, cost, pageNum, 12)
            .then(resultobj => {
                console.log(cost);
                res.render('cards', {
                    cards: resultobj.cards,
                    title: classname,
                    pageNum: pageNum,
                    baseurl: req.baseUrl,
                    pathurl: req.path,
                    totalNum: resultobj.totalNum,
                    activeItem: 2,
                    cost:Number(cost)
                });
            });
    }else {
        cardService.getCardsByClassName(classname, pageNum, 12)
            .then(resultobj => {
                console.log(cost);
                res.render('cards', {
                    cards: resultobj.cards,
                    title: classname,
                    pageNum: pageNum,
                    baseurl: req.baseUrl,
                    pathurl: req.path,
                    totalNum: resultobj.totalNum,
                    activeItem: 2,
                    cost: undefined
                });
            });
    }
});

/* for class category. */
router.get('/class', function(req, res, next) {
    res.render("class", {
        playerClasses: playerClasses,
        activeItem: 2,
        baseurl: req.baseUrl,
        pathurl: req.path
    });
});

/* for rarity category. */
router.get('/rarity', function(req, res, next) {
    res.render("rarity", {
        rarity: rarity,
        activeItem: 3,
        baseurl: req.baseUrl,
        pathurl: req.path
    });
});

/*searching by rarity. */
router.get('/rarity/:rarityname', function(req, res, next) {
    var rarityname = req.params.rarityname;
    rarityname = rarityname[0].toUpperCase() + rarityname.slice(1); /* Uppercase the first letter */
    var pageNum = req.query.pageNum || 1;
    var cost = req.query.cost;
    console.log(pageNum);
    if(cost!==undefined){
        /* with cost filter. */
        cardService.getCardsByRarityAndCost(rarityname, cost, pageNum, 12)
            .then(resultobj => {
                console.log(cost);
                res.render('cards', {
                    cards: resultobj.cards,
                    title: rarityname,
                    pageNum: pageNum,
                    baseurl: req.baseUrl,
                    pathurl: req.path,
                    totalNum: resultobj.totalNum,
                    activeItem: 3,
                    cost:Number(cost)
                });
            });
    }else {
        cardService.getCardsByRarity(rarityname, pageNum, 12)
            .then(resultobj => {
                res.render('cards', {
                    cards: resultobj.cards,
                    title: rarityname,
                    pageNum: pageNum,
                    baseurl: req.baseUrl,
                    pathurl: req.path,
                    totalNum: resultobj.totalNum,
                    activeItem: 3,
                    cost:undefined
                });
            });
    }

});

/*searching all cardbacks*/
router.get('/cardback', function(req, res, next) {
    var pageNum = req.query.pageNum || 1;
    console.log(pageNum);
    cardService.getCardBacks(pageNum, 12)
        .then(resultobj => {
            res.render('cardbacks', {
                cardbacks: resultobj.cardbacks,
                title: "CardBacks",
                pageNum: pageNum,
                baseurl: req.baseUrl,
                pathurl: req.path,
                totalNum: resultobj.totalNum,
                activeItem: 4,
                cost:undefined
            });
        });
});

/*dispaly single cardback*/
router.get('/cardback/:cardbackid', function(req, res, next) {
    var cardbackid = req.params.cardbackid;
    cardService.getCardBackById(cardbackid)
        .then(cardback => {
            res.render('singlecardback', {
                cardback: cardback,
                activeItem: 4
            });
        });
});




module.exports = router;
