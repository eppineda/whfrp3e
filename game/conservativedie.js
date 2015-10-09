/**
 * Copyright (C) 2015 Enrique P. Pineda
 */

function ConservativeDie() {
    this.color = 'purple'
    this.sides = [
        'blank', 'eagle', 'eagle', 'hourglass-hammer', 'hourglass-hammer',
        'hammer', 'hammer', 'hammer', 'hammer', 'eagle-hammer'
    ]
}

ConservativeDie.prototype.roll = function() {
    return this.sides[Math.floor(Math.random() * this.sides.length)]
}

module.exports = ConservativeDie

/**
 * Copyright (C) 2015 Enrique P. Pineda
 */
