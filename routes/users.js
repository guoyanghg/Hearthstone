var express = require('express');
var router = express.Router();
var cardService = require('../services/cardService');
const playerClasses = [
    {
        classname: "Warrior",
        img:"/images/Garrosh_Hellscream(635)_Gold.png",
        icon:"/images/Ui-charactercreate-classes_warrior.png",
        intro: "Weapon masters, bloodthirsty berserkers, and defenders of the weak, warriors are a force to be reckoned with on the battlefield. With their raw strength, determination, and pure hatred, warriors seek to vanquish any foe who stands in their way.",
        motto:"\"Remember: Life is nothing without valor\"\n" +
            "-Odyn",
        color: "#C79C6E"
    },{
        classname: "Hunter",
        img:"/images/Rexxar(484)_Gold.png",
        icon:"/images/Ui-charactercreate-classes_hunter.png",
        intro:"Hunters come from a variety of backgrounds ranging from trackers to tamers to deadly marksmen. Hunters (with the exception of survival hunters) are unique in that they are only ranged class in World of Warcraft that uses arrows and bullets to deal damage instead of spells.",
        motto:"\"It is said that I hunt alone, wandering these bitter lands far from civilization. But in truth, I hunt with family. One that I hold close. I protect them, and they protect me.\"\n" +
            "- Rexxar",
        color: "#ABD473"
    },{
        classname: "Shaman",
        img:"/images/Thrall(319)_Gold.png",
        icon:"/images/Ui-charactercreate-classes_shaman.png",
        intro:"Disciples and wielders of elemental magic, shamans seek to harness and live in harmony with the Elements. On the battlefield, shamans can call upon the restorative powers of water to mend wounds and heal allies, the wind to empower allies, the fortifying properties of the earth, or the destructive properties of fire to vanquish foes.",
        motto:"\"The relationship between the elements and the shaman is one of synchronicity. The shaman's influence helps to calm and unite us, just as our influence enriches and fulfills the shaman.\"\n" +
            "-The Water Speaking to Farseer Nobundo",
        color: "#0070DE"
    },{
        classname: "Rogue",
        img:"/images/Valeera_Sanguinar(2)_Gold.png",
        icon:"/images/Ui-charactercreate-classes_rogue.png",
        intro:"Thieves, cutthroats, spies, master poisoners, assassins. These are but few of the many words that describe rogues. On the battlefield, rogues employ a variety of tactics ranging from subtlety to lethal and agonizing poisons to guerrilla warfare. ",
        motto:"\"I have ways of making you not talk!\"\n" +
            "-Mathias Shaw",
        color:"#FFF569"
    },{
        classname: "Mage",
        img:"/images/Jaina_Proudmoore(320)_Gold.png",
        icon:"/images/Ui-charactercreate-classes_mage.png",
        intro:"Adepts of the magical arts, mages are a scholarly class that have origins dating as far back as the Well of Eternity. Knowledgeable and powerful, mages can assault their foes with raw arcane magic, burn their foes to ash with powerful fire magic, and chill and freeze their enemies to the bone with extremely cold frost magic.",
        motto:"\"No matter how learned and knowledgeable, how wise and how wonderful, how powerful and puissant, there is always one more sliver of power, one more bit of knowledge, one more secret to be learned by any mage.\"\n" +
            "-Medivh",
        color: "#69CCF0"
    },{
        classname: "Druid",
        img:"/images/Malfurion_Stormrage(621)_Gold.png",
        icon:"/images/Ui-charactercreate-classes_druid.png",
        intro:"Trained with the sole purpose to protect and preserve the balance of nature, druids are master shapeshifters that can take on the form of numerous animals and creatures in order to assist their allies. Druids have four specializations which allows them to fill all roles in a raiding environment: Balance, Feral, Guardian, and Restoration.",
        motto:"\"Nature seeks balance in all things.\"\n" +
            "-Archdruid Hamuul Runetotem",
        color: "#FF7D0A"
    },{
        classname: "Paradin",
        img:"/images/Uther_Lightbringer(257)_Gold.png",
        icon:"/images/Ui-charactercreate-classes_paladin.png",
        intro:"Champions of the Light and crusaders of justice, Paladins seek to walk the path of righteousness in all things they do. On the battlefield, Paladins can be anything from holy warriors who assail their foes with holy magic, steadfast protectors who use the power of the Light to shield both themselves or allies.",
        motto:"\"We are inherently unworthy, simply because we are human, and all human beings--aye, and elves, and dwarves, and all the other races--are flawed. But the Light loves us anyway. It loves us for what we sometimes can rise to in rare moments.",
        color: "#F58CBA"
    },{
        classname: "Priest",
        img:"/images/Anduin_Wrynn(110)_Gold.png",
        icon:"/images/Ui-charactercreate-classes_priest.png",
        intro:"Scions of the Light or master wielders of the Void, priests utilize their holy and void powers to heal allies and destroy enemies. Priests have three specializations: Discipline, Holy, and Shadow. Each of the three specializations utilizes intellect as a primary stat and wears cloth armor.",
        motto:"\"Blessed are the torchbearers, who bring the light to darkness. Blessed are the valorous, who stand fast in an unjust world.\"\n" +
            "-Prophet Velen",
        color: "#FFFFFF"
    },{
        classname: "Warlock",
        img:"/images/Gul'dan(618)_Gold.png",
        icon:"/images/Ui-charactercreate-classes_warlock.png",
        intro:"In the face of demonic power, most heroes see only death, whereas Warlocks see opportunity. Warlocks are voracious spellcasters that utilize the powers of shadow and the destructive forces of fel to either slowly drain their enemies' lives, swarm them with a vast army of demons, or strike with chaotic energy. ",
        motto:"\"No longer are they shaman. They were abandoned by the elements - They will call them no longer and beg for their aid. Behold those who have power, and who are not afraid to wield it. Behold... The Warlocks!\"\n" +
            "-Gul'dan",
        color: "#9482C9"
    },{
        classname: "Neutral",
        img:"/images/Ragnaros_the_Firelord(14654).png",
        icon:"/images/neutral_icon.png",
        intro:"Neutral minions of HearthStone.",
        motto:"\"THIS WORLD AND ALL THAT YOU HOLD DEAR EXIST ONLY TO BURN!\"",
        color: "black"
}];

const rarity =[{
    rarity: "Free",
    img:"/images/free_image.png"
},{
    rarity: "Common",
    img:"/images/common_image.png"
},{
    rarity: "Rare",
    img:"/images/rare_image.png"
},{
    rarity: "Epic",
    img:"/images/epic_image.png"
},{
    rarity: "Legendary",
    img:"/images/legendary_image.png"
}];






/* GET users listing. */
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

router.get('/class/:classname', function(req, res, next) {
    const classname = req.params.classname;
    var pageNum = req.query.pageNum || 1;
    var cost = req.query.cost;
    if(cost!==undefined){
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


router.get('/class', function(req, res, next) {
    res.render("class", {
        playerClasses: playerClasses,
        activeItem: 2,
        baseurl: req.baseUrl,
        pathurl: req.path
    });
});

router.get('/rarity', function(req, res, next) {
    res.render("rarity", {
        rarity: rarity,
        activeItem: 3,
        baseurl: req.baseUrl,
        pathurl: req.path
    });
});

router.get('/rarity/:rarityname', function(req, res, next) {
    var rarityname = req.params.rarityname;
    var pageNum = req.query.pageNum || 1;
    var cost = req.query.cost;
    console.log(pageNum);
    if(cost!==undefined){
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
