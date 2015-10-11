/**
 * Copyright (C) 2015 Enrique P. Pineda
 */

var RecklessDie = {
    color:'purple',
    sides:[
        'blank', 'eagle-hammer', 'skull', 'skull', 'dual-eagles',
        'blank', 'dual-hammer', 'dual-hammer', 'blood-hammer', 'blood-hammer'
    ],
    roll:function() {
        return this.sides[Math.floor(Math.random() * this.sides.length)]
    }
}

module.exports = RecklessDie

/**
 * Copyright (C) 2015 Enrique P. Pineda
 */
