/**
 * Copyright (C) 2015 Enrique P. Pineda
 */

var ExpertiseDie = {
    color:'purple',
    sides:[
        'hammer', '+hammer',
        'comet', 'eagle',
        'blank', 'eagle'
    ],
    roll:function() {
        return this.sides[Math.floor(Math.random() * this.sides.length)]
    }
}

module.exports = ExpertiseDie

/**
 * Copyright (C) 2015 Enrique P. Pineda
 */
