/**
 * Copyright (C) 2015 - 2017 Enrique P. Pineda
 */

import Die from './die'
export default class FortuneDie extends Die {
    static _color = 'white'
    static _sides = [
        'blank', 'blank',
        'hammer', 'hammer',
        'blank', 'eagle'
    ]
    constructor() { super(FortuneDie._color, FortuneDie._sides) }
}
