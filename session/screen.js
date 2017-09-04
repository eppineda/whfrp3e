"use strict";
/**
 * Copyright (C) 2015 - 2017 Enrique P. Pineda
 */
Object.defineProperty(exports, "__esModule", { value: true });
// collection of related information, e.g. character sheet, party sheet, turn
// tracking, et cetera
var Information = /** @class */ (function () {
    function Information() {
    }
    Information.prototype.render = function () {
    };
    return Information;
}());
exports.Information = Information;
// models a panel of information, a subdivided area of the screen
var Panel = /** @class */ (function () {
    function Panel(screen, title, information) {
        this._screen = screen;
        this._title = title;
        this._information = information;
        this._position = this._screen.attach(this);
        this._render = this._information.render;
        this._shared = false; // true to allow others to view
    }
    Object.defineProperty(Panel.prototype, "title", {
        get: function () { return this._title; },
        set: function (t) { this._title = t; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Panel.prototype, "position", {
        get: function () { return this._position; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Panel.prototype, "shared", {
        set: function (flag) { this._shared = flag; },
        enumerable: true,
        configurable: true
    });
    return Panel;
}());
exports.Panel = Panel;
// the collection of all panels constitutes the entire "screen"
var Screen = /** @class */ (function () {
    function Screen() {
        this._panels = [];
    }
    Screen.prototype.render = function () {
        for (var _i = 0, _a = this._panels; _i < _a.length; _i++) {
            var p = _a[_i];
            p.render();
        }
    };
    Screen.prototype.attach = function (panel) {
        var reorganize = function () {
            /*
            todo - arrange the panels so that they're all readable and accessible
                ...
            todo - arrange the panels so that they're all readable and accessible
            */
            for (var _i = 0, _a = this._panels; _i < _a.length; _i++) {
                var p = _a[_i];
                p.render();
            }
        }; // reorganize
        this._panels.push(panel);
        reorganize();
    };
    return Screen;
}());
exports.default = Screen;
