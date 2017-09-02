import ChallengeDie from '../challengedie'
import CharacteristicDie from '../characteristicdie'
import ConservativeDie from '../conservativedie'
import ExpertiseDie from '../expertisedie'

var challenge = new ChallengeDie()
var characteristic = new CharacteristicDie()
var conservative = new ConservativeDie()
var expertise = new ExpertiseDie()

console.log(ChallengeDie.roll())
console.log(challenge.roll())
console.log(CharacteristicDie.roll())
console.log(characteristic.roll())
console.log(ConservativeDie.roll())
console.log(conservative.roll())
console.log(ExpertiseDie.roll())
console.log(expertise.roll())
