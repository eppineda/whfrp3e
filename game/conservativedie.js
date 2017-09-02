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
var ConservativeDie = /** @class */ (function (_super) {
    __extends(ConservativeDie, _super);
    function ConservativeDie() {
        return _super.call(this, 'green', [
            'blank', 'eagle', 'eagle', 'hourglass-hammer', 'hourglass-hammer',
            'hammer', 'hammer', 'hammer', 'hammer', 'eagle-hammer'
        ]) || this;
    }
    ConservativeDie.prototype.roll = function () { return die_1.Die.roll(); };
    return ConservativeDie;
}(die_1.Die));
exports.ConservativeDie = ConservativeDie;
