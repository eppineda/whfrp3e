var ChallengeDie = require('./challengedie')
var CharacteristicDie = require('./characteristicdie')
var RecklessDie = require('./recklessdie')
var FortuneDie = require('./fortunedie')
var MisfortuneDie = require('./misfortunedie')
var ConservativeDie = require('./conservativedie')
var ExpertiseDie = require('./expertisedie')
var DicePool = require('./dicepool')

var purple = new ChallengeDie
var blue = new CharacteristicDie
var red = new RecklessDie
var white = new FortuneDie
var black = new MisfortuneDie
var green = new ConservativeDie
var yellow = new ExpertiseDie
var pool = new DicePool([ purple, blue, red, white, black, green, yellow ])

console.log('challenge die roll:', purple.roll())
console.log('characteristic die roll:', blue.roll())
console.log('reckless die roll:', red.roll())
console.log('fortune die roll:', white.roll())
console.log('misfortune die roll:', black.roll())
console.log('conservative die roll:', green.roll())
console.log('expertise die roll:', yellow.roll())
console.log('rolling dice pool:', pool.roll())
