// create a unirest object
var unirest = require("unirest");
var header = {
    "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
    "x-rapidapi-key": "220427409dmsha5b33e7e664dcdep18a129jsnb5afb437f052"
};


var getCardsByClassName = function(className){

    return new Promise((resolve, reject) => {
        var req = unirest("GET", "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/classes/" + className);
        req.headers(header)
            .end(function (response) {
                if (response.error){
                    reject(response.error);
                }else {
                    resolve(response.body);
                }
            });
        }
    );
};


module.exports = {
    getCardsByClassName: getCardsByClassName
};