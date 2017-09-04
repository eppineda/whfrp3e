/**
 * Copyright (C) 2015 - 2017 Enrique P. Pineda
 */

// collection of related information, e.g. character sheet, party sheet, turn
// tracking, et cetera
export class Information {
    render() {
    }
} // Information

// models a panel of information, a subdivided area of the screen
export class Panel {
    _screen
    _title
    _position
    _information
    _render
    _shared
    _minimized
    constructor(screen, title, information) {
        this._screen = screen
        this._title = title
        this._information = information
        this._position = this._screen.attach(this)
        this._render = this._information.render
        this._shared = false // true to allow others to view
        this._minimized = false // true when the info is not presented on-screen
    }
    get title() { return this._title }
    set title(t) { this._title = t }
    get position() { return this._position }
    set shared(flag) { this._shared = flag }
    get minimized() { return this._minimized }
    minimize() {
        this._minimized = true
    }
} // Panel

// the collection of all panels constitutes the entire "screen"

export class Screen {
    _panels
    _arrangements
    constructor() {
        this._panels = []
        this._arrangements = {}
    }
    get arrangements() { return Object.keys(this._arrangements) }
    render(templateName) { this._arrangements[templateName].render(this._panels) }
    attach(panel, ScreenOrganizer) {
        this._panels.push(panel)
        this._arrangements =
        ScreenOrganizer.options(this._panels.map(function(p) {
            return !p.minimized
        }).length)
        return this.arrangements
    }
    minimize(panel) {
        panel.minimize()
    }
} // Screen

/**
 * organizes a collection of visible panels into a grid layout
 * subclass for each possible layout
 */
export class Arrangement {
    _name
    _template
    constructor(name, template) {
        this._name = name
        this._template = template
    }
    get name() { return this._name }
    render(panels) {
    }
} // Arrangement
