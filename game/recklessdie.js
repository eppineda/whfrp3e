"use strict";
/**
 * Copyright (C) 2015 -2017 Enrique P. Pineda
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
var RecklessDie = /** @class */ (function (_super) {
    __extends(RecklessDie, _super);
    function RecklessDie() {
        return _super.call(this, RecklessDie._color, RecklessDie._sides) || this;
    }
    RecklessDie._color = 'red';
    RecklessDie._sides = [
        'blank', 'eagle-hammer', 'skull', 'skull', 'dual-eagles',
        'blank', 'dual-hammer', 'dual-hammer', 'blood-hammer', 'blood-hammer'
    ];
    return RecklessDie;
}(die_1["default"]));
exports["default"] = RecklessDie;
