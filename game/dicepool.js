/**
 * Copyright (C) 2015 Enrique P. Pineda
 */

function DicePool(dice) {
    this.dice = dice
}

DicePool.prototype.success = [
    'hammer', 'dual-hammer', 
    'hourglass-hammer', 'eagle-hammer', 'blood-hammer' 
]
DicePool.prototype.failure = [ 'crossed', 'dual-crossed' ]
DicePool.prototype.boon = [ 'eagle', 'dual-eagles', 'eagle-hammer' ] 
DicePool.prototype.bane = [ 'skull', 'dual-skulls' ]
DicePool.prototype.chaosStar = [ 'chaos' ]
DicePool.prototype.sigmarsComet = [ 'comet' ]
DicePool.prototype.delay = [ 'hourglass' ]

DicePool.prototype.roll = function() {
    var outcome = { 
        successes:[], failures:[], 
        boons:[], banes:[], 
        chaosStars:[], comets:[],
        delays:[] 
    }
    var successes = outcome.successes
    var failures = outcome.failures
    var boons = outcome.boons
    var banes = outcome.banes
    var chaosStars = outcome.chaosStars
    var comets = outcome.comets
    var delays = outcome.delays

    for (var d in this.dice) {
        var result = this.dice[d].roll()
        var regex = new RegExp(result.replace('+', ''))

        if (regex.test(this.success.toString()) && 'eagle' !== result) {
            successes.push(result)
        }
        if (regex.test(this.failure.toString())) failures.push(result)
        if (regex.test(this.boon.toString()) && 'hammer' !== result && '+hammer' !== result)
            boons.push(result)
        if (regex.test(this.bane.toString())) banes.push(result)
        if (regex.test(this.chaosStar.toString())) chaosStars.push(result)
        if (regex.test(this.sigmarsComet.toString())) comets.push(result)
        if (regex.test(this.delay.toString())) delays.push(result)
    } // for
    return outcome 
} // roll

module.exports = DicePool

/**
 * Copyright (C) 2015 Enrique P. Pineda
 */
