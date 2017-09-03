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
var MisfortuneDie = /** @class */ (function (_super) {
    __extends(MisfortuneDie, _super);
    function MisfortuneDie() {
        return _super.call(this, MisfortuneDie._color, MisfortuneDie._sides) || this;
    }
    MisfortuneDie._color = 'black';
    MisfortuneDie._sides = [
        'blank', 'blank',
        'crossed', 'crossed',
        'blank', 'skull'
    ];
    return MisfortuneDie;
}(die_1["default"]));
exports["default"] = MisfortuneDie;
