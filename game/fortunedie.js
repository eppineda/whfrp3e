"use strict";
/**
 * Copyright (C) 2015 - 2017 Enrique P. Pineda
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
var FortuneDie = /** @class */ (function (_super) {
    __extends(FortuneDie, _super);
    function FortuneDie() {
        return _super.call(this, FortuneDie._color, FortuneDie._sides) || this;
    }
    FortuneDie._color = 'white';
    FortuneDie._sides = [
        'blank', 'blank',
        'hammer', 'hammer',
        'blank', 'eagle'
    ];
    return FortuneDie;
}(die_1["default"]));
exports["default"] = FortuneDie;
