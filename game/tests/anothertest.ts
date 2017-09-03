import ChallengeDie from '../challengedie'
import CharacteristicDie from '../characteristicdie'
import ConservativeDie from '../conservativedie'
import ExpertiseDie from '../expertisedie'

let challenge = new ChallengeDie()
let characteristic = new CharacteristicDie()
let conservative = new ConservativeDie()
let expertise = new ExpertiseDie()

console.log(challenge.roll())
console.log(characteristic.roll())
console.log(conservative.roll())
console.log(expertise.roll())
