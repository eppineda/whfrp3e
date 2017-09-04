/**
 * Copyright (C) 2015 - 2017 Enrique P. Pineda
 */

// collection of related information, e.g. character sheet, party sheet, turn
// tracking, et cetera
export class Information {
    render() {
    }
}

// models a panel of information, a subdivided area of the screen
export class Panel {
    _screen
    _title
    _position
    _information
    _render
    _shared
    constructor(screen, title, information) {
        this._screen = screen
        this._title = title
        this._information = information
        this._position = this._screen.attach(this)
        this._render = this._information.render
        this._shared = false // true to allow others to view
    }
    get title() { return this._title }
    set title(t) { this._title = t }
    get position() { return this._position }
    set shared(flag) { this._shared = flag }
}

// the collection of all panels constitutes the entire "screen"

export default class Screen {
    _panels
    constructor() {
        this._panels = []
    }
    render() {
        for (let p of this._panels) {
            p.render()
        }
    }
    attach(panel) {
        let reorganize = function() {
/*
todo - arrange the panels so that they're all readable and accessible
    ...
todo - arrange the panels so that they're all readable and accessible
*/
            for (let p of this._panels) {
                p.render()
            }
        } // reorganize

        this._panels.push(panel)
        reorganize()
    }
}
