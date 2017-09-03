/**
 * Copyright (C) 2015 - 2017 Enrique P. Pineda
 */

import Die from './die'
export default class ExpertiseDie extends Die {
    static _color = 'yellow'
    static _sides = [
        'hammer', '+hammer',
        'comet', 'eagle',
        'blank', 'eagle'
    ]
    constructor() { super(ExpertiseDie._color, ExpertiseDie._sides) }
}
