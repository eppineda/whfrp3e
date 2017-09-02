import ChallengeDie from '../challengedie'
import CharacteristicDie from '../characteristicdie'
import ConservativeDie from '../conservativedie'
import ExpertiseDie from '../expertisedie'

let challenge = new ChallengeDie
let characteristic = new CharacteristicDie
let conservative = new ConservativeDie
let expertise = new ExpertiseDie
/*
var RecklessDie = require('./recklessdie')
var FortuneDie = require('./fortunedie')
var MisfortuneDie = require('./misfortunedie')
var ExpertiseDie = require('./expertisedie')
var DicePool = require('./dicepool')
var pool = new DicePool([ ChallengeDie, CharacteristicDie, ConservativeDie, 
    FortuneDie, MisfortuneDie, RecklessDie, ExpertiseDie ])
*/

console.log('challenge die roll:', challenge.roll())
console.log('characteristic die roll:', characteristic.roll())
console.log('conservative die roll:', conservative.roll())
console.log('expertise die roll:', expertise.roll())
/*
console.log('reckless die roll:', RecklessDie.roll())
console.log('fortune die roll:', FortuneDie.roll())
console.log('misfortune die roll:', MisfortuneDie.roll())
console.log('expertise die roll:', ExpertiseDie.roll())
console.log('rolling dice pool:', pool.roll())
*/
