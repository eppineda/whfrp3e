"use strict";
exports.__esModule = true;
var challengedie_1 = require("./challengedie");
var challenge = new challengedie_1.ChallengeDie();
/*
var CharacteristicDie = require('./characteristicdie')
var RecklessDie = require('./recklessdie')
var FortuneDie = require('./fortunedie')
var MisfortuneDie = require('./misfortunedie')
var ConservativeDie = require('./conservativedie')
var ExpertiseDie = require('./expertisedie')
var DicePool = require('./dicepool')
var pool = new DicePool([ ChallengeDie, CharacteristicDie, RecklessDie,
    FortuneDie, MisfortuneDie, ConservativeDie, ExpertiseDie ])
*/
console.log('challenge die roll:', challenge.roll());
/*
console.log('characteristic die roll:', CharacteristicDie.roll())
console.log('reckless die roll:', RecklessDie.roll())
console.log('fortune die roll:', FortuneDie.roll())
console.log('misfortune die roll:', MisfortuneDie.roll())
console.log('conservative die roll:', ConservativeDie.roll())
console.log('expertise die roll:', ExpertiseDie.roll())
console.log('rolling dice pool:', pool.roll())
*/
