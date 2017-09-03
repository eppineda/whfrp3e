/**
 * Copyright (C) 2015 - 2017 Enrique P. Pineda
 */

import Die from './die'
export default class MisfortuneDie extends Die {
    static _color = 'black'
    static _sides = [
        'blank', 'blank',
        'crossed', 'crossed',
        'blank', 'skull'
    ]
    constructor() { super(MisfortuneDie._color, MisfortuneDie._sides) }
}
