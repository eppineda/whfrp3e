/**
 * Copyright (C) 2015 -2017 Enrique P. Pineda
 */

import Die from './die'
export default class RecklessDie extends Die {
    static _color = 'red'
    static _sides = [
        'blank', 'eagle-hammer', 'skull', 'skull', 'dual-eagles',
        'blank', 'dual-hammer', 'dual-hammer', 'blood-hammer', 'blood-hammer'
    ]
    constructor() { super(RecklessDie._color, RecklessDie._sides) }
}
