/**
 * Copyright (C) 2015 Enrique P. Pineda
 */

function ExpertiseDie() {
    this.color = 'purple'
    this.sides = [
        'hammer', '+hammer',
        'comet', 'eagle',
        'blank', 'eagle'
    ]
}

ExpertiseDie.prototype.roll = function() {
    return this.sides[Math.floor(Math.random() * this.sides.length)]
}

module.exports = ExpertiseDie

/**
 * Copyright (C) 2015 Enrique P. Pineda
 */
