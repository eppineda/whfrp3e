/**
 * Copyright (C) 2015 Enrique P. Pineda
 */

function Party(name) {
    this.name = name
    this.fortune = 0
    this.players = []
}

Party.prototype.gainFortune = function() {
    if (this.players.length === this.fortune) return // already at maximum
    ++this.fortune
}

Party.prototype.useFortune = function() {
    if (1 > this.fortune) return // already at 0
    --this.fortune
}


/**
 * Copyright (C) 2015 Enrique P. Pineda
 */
