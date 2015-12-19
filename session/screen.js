/**
 * Copyright (C) 2015 Enrique P. Pineda
 */

// models a panel of information, e.g. character sheet, turn tracking, etc.

var Panel = function(screen, title, information) {
    this.screen = screen
    this.title = title
    this.position = screen.attach(this)
    this.information = information
    this.render = information.render
    this.shared = false
}

var Screen = function() {
    this.panels = []
}

Screen.prototype.render = function() {

    for (var p in this.panels) {
        this.panels[p].render()
    }
}

Screen.prototype.attach = function(panel) {
    this.panels.push(panel)
    reorganize()
}

Screen.prototype.reorganize = function() {
/*
todo - arrange the panels so that they're all readable and accessible
    ...
todo - arrange the panels so that they're all readable and accessible
*/

    for (var p in this.panels) {
        this.panels[p].render()
    }
}
