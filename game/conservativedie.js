/**
 * Copyright (C) 2015 Enrique P. Pineda
 */

var ConservativeDie = {
    color:'purple',
    sides:[
        'blank', 'eagle', 'eagle', 'hourglass-hammer', 'hourglass-hammer',
        'hammer', 'hammer', 'hammer', 'hammer', 'eagle-hammer'
    ],
    roll:function() {
        return this.sides[Math.floor(Math.random() * this.sides.length)]
    }
}

module.exports = ConservativeDie

/**
 * Copyright (C) 2015 Enrique P. Pineda
 */
