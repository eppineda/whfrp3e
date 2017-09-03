"use strict";
/**
 * Copyright (C) 2015 - 2017 Enrique P. Pineda
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Player = /** @class */ (function () {
    function Player(name, race) {
        this._dicepool = [];
        this._career = {};
        this._statistics = {};
        function generateStatistics() {
            var stats = {};
            return stats;
        }
        this._name = name;
        this._race = race;
        this._statistics = generateStatistics();
    }
    Object.defineProperty(Player.prototype, "race", {
        get: function () { return this._race; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "name", {
        get: function () { return this._name; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "dicepool", {
        get: function () { return this._dicepool; },
        set: function (p) { this._dicepool = p; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "career", {
        get: function () { return this._career; },
        set: function (c) { this._career = c; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "statistics", {
        get: function () { return this._statistics; },
        enumerable: true,
        configurable: true
    });
    return Player;
}());
exports.default = Player;
