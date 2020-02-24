var cardModel = require("../models/cardModel").commonCardModel;
var cardBackModel = require("../models/cardModel").cardBackModel;


var getCardByName = function (cardName) {
    return new Promise((resolve, reject)=>{
        const query ={
            "name": cardName
        };
        cardModel.findOne(query, (err, card)=>{
            if(err){
                reject(err);
            }else{
                resolve(card);
            }
        });

    })
};

var getCardsByClassNameAndCost = function(className, cost, pageNum, size){

    return new Promise((resolve, reject) => {
        console.log("im here");
        const query = {
            "playerClass": className,
            "type": "Minion",
            "img": {
                "$exists":true
            },
            "imgGold":{
                "$exists":true
            },
            "cost":Number(cost)
        };

        if( Number(cost) === 10){
            query.cost = {$gt: Number(cost)}
        }
        cardModel.find(query)
            .skip((pageNum-1)*size)
            .limit(size)
            .sort({cost:'asc'})
            .exec(function (err, cards) {
                cardModel.countDocuments(query).exec(function (err, count) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve({cards: cards, totalNum: Math.ceil(count/size)});
                    }
                });
            });

    });
};

var getCardsByRarityAndCost = function(rarity, cost, pageNum, size){

    return new Promise((resolve, reject) => {
        console.log("im here");
        const query = {
            "rarity": rarity,
            "type": "Minion",
            "img": {
                "$exists":true
            },
            "imgGold":{
                "$exists":true
            },
            "cost":Number(cost)
        };

        if(Number(cost) === 10){
            query.cost = {$gt: Number(cost)}
        }
        cardModel.find(query)
            .skip((pageNum-1)*size)
            .limit(size)
            .sort({cost:'asc'})
            .exec(function (err, cards) {
                cardModel.countDocuments(query).exec(function (err, count) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve({cards: cards, totalNum: Math.ceil(count/size)});
                    }
                });
            });

    });
};


var getCardsByClassName = function(className, pageNum, size){

    return new Promise((resolve, reject) => {
        console.log("im here");
        const query = {
            "playerClass": className,
            "type": "Minion",
            "img": {
                "$exists":true
            },
            "imgGold":{
                "$exists":true
            },
            "cost":{
                "$exists":true
            }
        };
        cardModel.find(query)
            .skip((pageNum-1)*size)
            .limit(size)
            .sort({cost:'asc'})
            .exec(function (err, cards) {
                cardModel.countDocuments(query).exec(function (err, count) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve({cards: cards, totalNum: Math.ceil(count/size)});
                    }
                });
            });

    });
};

var getCardsByRarity = function(rarity, pageNum, size){

    return new Promise((resolve, reject) => {
        const query = {
            "rarity": rarity,
            "type": "Minion",
            "img": {
                "$exists":true
            },
            "imgGold":{
                "$exists":true
            },
            "cost":{
                "$exists":true
            }
        };
        cardModel.find(query)
            .skip((pageNum-1)*size)
            .limit(size)
            .sort({cost:'asc'})
            .exec(function (err, cards) {
                cardModel.countDocuments(query).exec(function (err, count) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve({cards: cards, totalNum: Math.ceil(count/size)});
                    }
                });
            });

    });
};


var getCardBackById = function (id) {
    return new Promise((resolve, reject)=>{
        const query ={
            "cardBackId": id
        };
        cardBackModel.findOne(query, (err, cardback)=>{
            if(err){
                reject(err);
            }else{
                resolve(cardback);
            }
        });

    })
};

var getCardBacks = function(pageNum, size){

    return new Promise((resolve, reject) => {
        const query = {
            "img": {
                "$exists":true
            },
            "imgAnimated":{
                "$exists":true
            },
        };
        cardBackModel.find(query)
            .skip((pageNum-1)*size)
            .limit(size)
            .sort({cardBackId:'asc'})
            .exec(function (err, cardbacks) {
                cardBackModel.countDocuments(query).exec(function (err, count) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve({cardbacks: cardbacks, totalNum: Math.ceil(count/size)});
                    }
                });
            });

    });
};


module.exports = {
    getCardByName:getCardByName,
    getCardsByClassName: getCardsByClassName,
    getCardsByRarity: getCardsByRarity,
    getCardBacks: getCardBacks,
    getCardBackById: getCardBackById,
    getCardsByClassNameAndCost: getCardsByClassNameAndCost,
    getCardsByRarityAndCost: getCardsByRarityAndCost
};