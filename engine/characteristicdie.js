/**
 * Copyright (C) 2015 Enrique P. Pineda
 */

function CharacteristicDie() {
    this.color = 'purple'
    this.sides = [
        'hammer', 'hammer',
        'blank', 'blank', 
        'hammer', 'hammer',
        'eagle', 'eagle'
    ]
}

CharacteristicDie.prototype.roll = function() {
    return this.sides[Math.floor(Math.random() * this.sides.length)]
}

module.exports = CharacteristicDie

/**
 * Copyright (C) 2015 Enrique P. Pineda
 */
