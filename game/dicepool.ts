/**
 * Copyright (C) 2015 - 2017 Enrique P. Pineda
 */

import Die from './die'

export default class DicePool {
    _dice
    constructor(dice) { this._dice = dice }
    static success = [
        'hammer', 'dual-hammer', 'hourglass-hammer', 'eagle-hammer', 'blood-hammer' 
    ]
    static failure = [ 'crossed', 'dual-crossed' ]
    static boon = [ 'eagle', 'dual-eagles', 'eagle-hammer' ] 
    static bane = [ 'skull', 'dual-skulls' ]
    static chaosStar = [ 'chaos' ]
    static sigmarsComet = [ 'comet' ]
    static delay = [ 'hourglass' ]
    roll() {
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

        for (let d in this._dice) {
            var result = this._dice[d].roll()
            var rgxResult = new RegExp(result.replace('+', ''))

            if (rgxResult.test(DicePool.success.toString()) && 'eagle' !== result) {
                successes.push(result)
            }
            if (rgxResult.test(DicePool.failure.toString())) failures.push(result)
            if (rgxResult.test(DicePool.boon.toString()) && 'hammer' !== result && '+hammer' !== result)
                boons.push(result)
            if (rgxResult.test(DicePool.bane.toString())) banes.push(result)
            if (rgxResult.test(DicePool.chaosStar.toString())) chaosStars.push(result)
            if (rgxResult.test(DicePool.sigmarsComet.toString())) comets.push(result)
            if (rgxResult.test(DicePool.delay.toString())) delays.push(result)
        } // for
        return outcome 
    } // roll
}
