/**
 * Copyright (C) 2015 Enrique P. Pineda
 */

var CharacteristicDie = {
    color:'purple',
    sides:[
        'hammer', 'hammer',
        'blank', 'blank', 
        'hammer', 'hammer',
        'eagle', 'eagle'
    ],
    roll:function() {
        return this.sides[Math.floor(Math.random() * this.sides.length)]
    }
}

module.exports = CharacteristicDie

/**
 * Copyright (C) 2015 Enrique P. Pineda
 */
