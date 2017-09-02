"use strict";
/**
 * Copyright (C) 2015- 2017 Enrique P. Pineda
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var die_1 = require("./die");
var CharacteristicDie = /** @class */ (function (_super) {
    __extends(CharacteristicDie, _super);
    function CharacteristicDie() {
        return _super.call(this, 'blue', [
            'hammer', 'hammer',
            'blank', 'blank',
            'hammer', 'hammer',
            'eagle', 'eagle'
        ]) || this;
    }
    CharacteristicDie.prototype.roll = function () { return die_1.Die.roll(); };
    return CharacteristicDie;
}(die_1.Die));
exports.CharacteristicDie = CharacteristicDie;
