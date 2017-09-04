/**
 * Copyright (C) 2015 - 2017 Enrique P. Pineda
 */

// collection of related information, e.g. character sheet, party sheet, turn
// tracking, et cetera
export interface GameStatistics {
    render():void
} // GameStatistics

// models a panel of information, a subdivided area of the screen
export class Panel {
    _screen
    _title
    _position
    _information:GameStatistics
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
    _layouts
    constructor() {
        this._panels = []
        this._layouts = {}
    }
    get layouts() { return Object.keys(this._layouts) }
    render(templateName) { this._layouts[templateName].render(this._panels) }
    attach(panel, ScreenOrganizer) {
        this._panels.push(panel)
        this._layouts =
        ScreenOrganizer.options(this._panels.map(function(p) {
            return !p.minimized
        }).length)
        return this._layouts
    }
    minimize(panel) {
        panel.minimize()
    }
} // Screen

/**
 * organizes a collection of visible panels into a grid layout
 * subclass for each possible layout
 */
export interface Layout {
    _name:String
    _template:String
    render(panels:Object[]):void
} // Layout
