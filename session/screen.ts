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
    _screen:Screen
    _title:string
    _information:GameStatistics
    _render:Function
    _shared:boolean
    _minimized:boolean
    constructor(screen:Screen, title:string, information:GameStatistics) {
        this._screen = screen
        this._title = title
        this._information = information
        this._screen.attach(this)
        this._render = this._information.render
        this._shared = false // true to allow others to view
        this._minimized = false // true when the info is not presented on-screen
    }
    get title() { return this._title }
    set title(t) { this._title = t }
    set shared(flag) { this._shared = flag }
    get minimized() { return this._minimized }
    minimize() {
        this._minimized = true
        this._screen.rearrange()
    }
    restore() {
        this._minimized = false
        this._screen.rearrange()
    }
} // Panel

// the collection of all panels constitutes the entire "screen"

export class Screen {
    _screenOrganizer:ScreenOrganizer
    _panels:Panel[]
    _layouts
    constructor(sc:ScreenOrganizer) {
        this._screenOrganizer = sc
        this._panels = []
        this._layouts = {}
    }
    get layouts():string[] { return Object.keys(this._layouts) }
    render(templateName) { this._layouts[templateName].render(this._panels) }
    attach(panel:Panel):string[] {
        this._panels.push(panel)
        this._layouts = this._screenOrganizer.options(this._panels.filter(function(p) {
            return !p.minimized
        }).length)
        return Object.keys(this._layouts)
    }
    rearrange():string[] {
        this._layouts = this._screenOrganizer.options(this._panels.filter(function(p) {
            return !p.minimized
        }).length)
        return Object.keys(this._layouts)
    }
} // Screen

/**
 * organizes a collection of visible panels into a grid layout
 * subclass for each possible layout
 */
export interface Layout {
    _name:string
    _template:string
    render(panels:Panel[]):void
} // Layout

export interface ScreenOrganizer {
    options(numPanels:number):{}
}
