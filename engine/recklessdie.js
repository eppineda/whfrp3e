/**
 * Copyright (C) 2015 Enrique P. Pineda
 */

function RecklessDie() {
    this.color = 'purple'
    this.sides = [
        'blank', 'eagle-hammer', 'skull', 'skull', 'dual-eagles',
        'blank', 'dual-hammer', 'dual-hammer', 'blood-hammer', 'blood-hammer'
    ]
}

RecklessDie.prototype.roll = function() {
    return this.sides[Math.floor(Math.random() * this.sides.length)]
}

module.exports = RecklessDie

/**
 * Copyright (C) 2015 Enrique P. Pineda
 */
