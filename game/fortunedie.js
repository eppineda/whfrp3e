/**
 * Copyright (C) 2015 Enrique P. Pineda
 */

var FortuneDie = {
    color:'purple',
    sides:[
        'blank', 'blank',
        'hammer', 'hammer',
        'blank', 'eagle'
    ],
    roll:function() {
        return this.sides[Math.floor(Math.random() * this.sides.length)]
    }
}

module.exports = FortuneDie

/**
 * Copyright (C) 2015 Enrique P. Pineda
 */
