"use strict";
/**
 * Copyright (C) 2015- 2017 Enrique P. Pineda
 */
exports.__esModule = true;
var Die = /** @class */ (function () {
    function Die(color, sides) {
        Die._color = color;
        Die._sides = sides;
    }
    Die.roll = function () { return Die._sides[Math.floor(Math.random() * Die._sides.length)]; };
    return Die;
}());
exports["default"] = Die;
