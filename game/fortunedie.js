/**
 * Copyright (C) 2015 Enrique P. Pineda
 */

function FortuneDie() {
    this.color = 'purple'
    this.sides = [
        'blank', 'blank',
        'hammer', 'hammer',
        'blank', 'eagle'
    ]
}

FortuneDie.prototype.roll = function() {
    return this.sides[Math.floor(Math.random() * this.sides.length)]
}

module.exports = FortuneDie

/**
 * Copyright (C) 2015 Enrique P. Pineda
 */
