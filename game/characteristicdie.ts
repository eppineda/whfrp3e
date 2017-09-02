/**
 * Copyright (C) 2015- 2017 Enrique P. Pineda
 */

import Die from './die'

export default class CharacteristicDie extends Die {
    constructor() {
        super('blue', [
            'hammer', 'hammer',
            'blank', 'blank', 
            'hammer', 'hammer',
            'eagle', 'eagle'
        ])
    }
    roll() { return Die.roll() }
}
