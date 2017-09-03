"use strict";
/**
 * Copyright (C) 2015 - 2017 Enrique P. Pineda
 */
exports.__esModule = true;
var DicePool = /** @class */ (function () {
    function DicePool(dice) {
        this._dice = dice;
    }
    DicePool.prototype.roll = function () {
        var outcome = {
            successes: [], failures: [],
            boons: [], banes: [],
            chaosStars: [], comets: [],
            delays: []
        };
        var successes = outcome.successes;
        var failures = outcome.failures;
        var boons = outcome.boons;
        var banes = outcome.banes;
        var chaosStars = outcome.chaosStars;
        var comets = outcome.comets;
        var delays = outcome.delays;
        for (var d in this._dice) {
            var result = this._dice[d].roll();
            console.log(result);
            var regex = new RegExp(result.replace('+', ''));
            if (regex.test(DicePool.success.toString()) && 'eagle' !== result) {
                successes.push(result);
            }
            if (regex.test(DicePool.failure.toString()))
                failures.push(result);
            if (regex.test(DicePool.boon.toString()) && 'hammer' !== result && '+hammer' !== result)
                boons.push(result);
            if (regex.test(DicePool.bane.toString()))
                banes.push(result);
            if (regex.test(DicePool.chaosStar.toString()))
                chaosStars.push(result);
            if (regex.test(DicePool.sigmarsComet.toString()))
                comets.push(result);
            if (regex.test(DicePool.delay.toString()))
                delays.push(result);
        } // for
        return outcome;
    }; // roll
    DicePool.success = [
        'hammer', 'dual-hammer', 'hourglass-hammer', 'eagle-hammer', 'blood-hammer'
    ];
    DicePool.failure = ['crossed', 'dual-crossed'];
    DicePool.boon = ['eagle', 'dual-eagles', 'eagle-hammer'];
    DicePool.bane = ['skull', 'dual-skulls'];
    DicePool.chaosStar = ['chaos'];
    DicePool.sigmarsComet = ['comet'];
    DicePool.delay = ['hourglass'];
    return DicePool;
}());
exports["default"] = DicePool;
