/**
 * Copyright (C) 2015 Enrique P. Pineda
 */

function MisfortuneDie() {
    this.color = 'purple'
    this.sides = [
        'blank', 'blank',
        'crossed', 'crossed',
        'blank', 'skull'
    ]
}

MisfortuneDie.prototype.roll = function() {
    return this.sides[Math.floor(Math.random() * this.sides.length)]
}

module.exports = MisfortuneDie

/**
 * Copyright (C) 2015 Enrique P. Pineda
 */
