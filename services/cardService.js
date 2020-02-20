var cardModel = require("../models/cardModel");


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

var getCardsByClassName = function(className, pageNum, size){

    return new Promise((resolve, reject) => {
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
                cardModel.count(query).exec(function (err, count) {
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
                cardModel.count(query).exec(function (err, count) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve({cards: cards, totalNum: Math.ceil(count/size)});
                    }
                });
            });

    });
};


module.exports = {
    getCardByName:getCardByName,
    getCardsByClassName: getCardsByClassName,
    getCardsByRarity: getCardsByRarity
};