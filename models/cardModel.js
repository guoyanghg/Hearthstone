var mongoose = require("mongoose");

mongoose.connect('mongodb+srv://guoyanghg:guoyangguoli123@hearthstone-jbkpq.mongodb.net/hearthstone?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//textschema for collection test
var testSchema = new mongoose.Schema({
    name: String,
    major: String,
});
// create card schema
var commonCardSchema  = new mongoose.Schema({
    cardId: String,
    dbfId: String,
    name: String,
    cardSet: String,
    type: String,
    faction: String,
    rarity: String,
    cost: Number,
    attack: Number,
    health: Number,
    text: String,
    flavor: String,
    artist: String,
    collectible: Boolean,
    elite: Boolean,
    playerClass: String,
    img: String,
    imgGold: String,
    locale: String,
    mechanics: [
        {
            name: String
        },
        {
            name: String
        }
    ]
});

// pay attention to the collection name!!!! damn
var commonCardModel = mongoose.model('commonCardModel', commonCardSchema, 'cards');

module.exports = commonCardModel;