import ChallengeDie from '../challengedie'
import CharacteristicDie from '../characteristicdie'
import ConservativeDie from '../conservativedie'
import ExpertiseDie from '../expertisedie'
import FortuneDie from '../fortunedie'
import MisfortuneDie from '../misfortunedie'
import RecklessDie from '../recklessdie'
import DicePool from '../dicepool'

let challenge = new ChallengeDie
let characteristic = new CharacteristicDie
let conservative = new ConservativeDie
let expertise = new ExpertiseDie
let fortune = new FortuneDie
let misfortune = new MisfortuneDie
let reckless = new RecklessDie
let pool = new DicePool([
    challenge, characteristic, conservative, expertise, fortune, misfortune,
    reckless
])

console.log('challenge die roll:', challenge.roll())
console.log('characteristic die roll:', characteristic.roll())
console.log('conservative die roll:', conservative.roll())
console.log('expertise die roll:', expertise.roll())
console.log('fortune die roll:', fortune.roll())
console.log('misfortune die roll:', misfortune.roll())
console.log('reckless die roll:', reckless.roll())
console.log('rolling dice pool:', pool.roll())
console.log(DicePool.success.toString())
