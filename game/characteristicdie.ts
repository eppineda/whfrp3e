/**
 * Copyright (C) 2015- 2017 Enrique P. Pineda
 */

import Die from './die'
export default class CharacteristicDie extends Die {
    static _color = 'blue'
    static _sides = [
        'hammer', 'hammer',
        'blank', 'blank', 
        'hammer', 'hammer',
        'eagle', 'eagle'
    ]
    constructor() { super(CharacteristicDie._color, CharacteristicDie._sides) }
}
