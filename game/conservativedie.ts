/**
 * Copyright (C) 2015- 2017 Enrique P. Pineda
 */

import Die from './die'
export default class ConservativeDie extends Die {
    static _color = 'green'
    static _sides = [
        'blank', 'eagle', 'eagle', 'hourglass-hammer', 'hourglass-hammer',
        'hammer', 'hammer', 'hammer', 'hammer', 'eagle-hammer'
    ]
    constructor() { super(ConservativeDie._color, ConservativeDie._sides) }
}
