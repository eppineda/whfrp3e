/**
 * Copyright (C) 2015 - 2017 Enrique P. Pineda
 */

export default class Party {
    _name
    _fortune
    _players
    constructor(players) {
        this._players = players
        this._fortune = 0
    }
    get fortune() { return this._fortune }
    gainFortune() {
        if (this._players.length === this.fortune) return // already at maximum
        return ++this._fortune
    }
    useFortune() {
        if (1 > this._fortune) return // already at 0
        return --this._fortune
    }
}
