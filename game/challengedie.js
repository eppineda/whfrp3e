/**
 * Copyright (C) 2015 Enrique P. Pineda
 */

var ChallengeDie = {
    color:'purple',
    sides:[
        'chaos', 'dual-crossed',
        'blank', 'crossed', 
        'dual-skulls', 'dual-crossed',
        'skull', 'crossed'
    ],
    roll:function() {
        return this.sides[Math.floor(Math.random() * this.sides.length)]
    }
}

module.exports = ChallengeDie

/**
 * Copyright (C) 2015 Enrique P. Pineda
 */
