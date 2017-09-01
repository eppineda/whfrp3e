"use strict";
/**
 * Copyright (C) 2015- 2017 Enrique P. Pineda
 */
exports.__esModule = true;
var Die = /** @class */ (function () {
    function Die(color, sides) {
        this._color = color;
        this._sides = sides;
    }
    Die.prototype.roll = function () { return this._sides[Math.floor(Math.random() * this._sides.length)]; };
    return Die;
}());
exports.Die = Die;
