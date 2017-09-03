import ChallengeDie from '../challengedie'
import CharacteristicDie from '../characteristicdie'
import ConservativeDie from '../conservativedie'
import ExpertiseDie from '../expertisedie'
import FortuneDie from '../fortunedie'
import MisfortuneDie from '../misfortunedie'

let challenge = new ChallengeDie()
let characteristic = new CharacteristicDie()
let conservative = new ConservativeDie()
let expertise = new ExpertiseDie()
let fortune = new FortuneDie()
let misfortune = new MisfortuneDie()

console.log(challenge.roll())
console.log(characteristic.roll())
console.log(conservative.roll())
console.log(expertise.roll())
console.log(fortune.roll())
console.log(misfortune.roll())
