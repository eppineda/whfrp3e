"use strict";
/**
 * Copyright (C) 2015 - 2017 Enrique P. Pineda
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Party = /** @class */ (function () {
    function Party(players) {
        this._players = players;
        this._fortune = 0;
    }
    Object.defineProperty(Party.prototype, "fortune", {
        get: function () { return this._fortune; },
        enumerable: true,
        configurable: true
    });
    Party.prototype.gainFortune = function () {
        if (this._players.length === this.fortune)
            return; // already at maximum
        return ++this._fortune;
    };
    Party.prototype.useFortune = function () {
        if (1 > this._fortune)
            return; // already at 0
        return --this._fortune;
    };
    return Party;
}());
exports.default = Party;
