/**
 * Copyright (C) 2015 Enrique P. Pineda
 */

var MisfortuneDie = {
    color:'purple',
    sides:[
        'blank', 'blank',
        'crossed', 'crossed',
        'blank', 'skull'
    ],
    roll:function() {
        return this.sides[Math.floor(Math.random() * this.sides.length)]
    }
}

module.exports = MisfortuneDie

/**
 * Copyright (C) 2015 Enrique P. Pineda
 */
