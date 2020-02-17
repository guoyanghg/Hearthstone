var cardModel = require("../models/cardModel");

// create a unirest object
var unirest = require("unirest");
var header = {
    "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
    "x-rapidapi-key": "220427409dmsha5b33e7e664dcdep18a129jsnb5afb437f052"
};


var getCardsByClassName = function(className){

    return new Promise((resolve, reject) => {
        var query = {
            "playerClass": className
        };
        cardModel.find(query, function (err, cards) {
            if (err) {
                reject(err);
            } else {
                console.log(cards);
                resolve(cards);
            }
        });
    });
};


module.exports = {
    getCardsByClassName: getCardsByClassName
};