/**
 * Copyright (C) 2015 Enrique P. Pineda
 */

function ChallengeDie() {
    this.color = 'purple'
    this.sides = [
        'chaos', 'dual-crossed',
        'blank', 'crossed', 
        'dual-skulls', 'dual-crossed',
        'skull', 'crossed'
    ]
}

ChallengeDie.prototype.roll = function() {
    return this.sides[Math.floor(Math.random() * this.sides.length)]
}

module.exports = ChallengeDie

/**
 * Copyright (C) 2015 Enrique P. Pineda
 */
