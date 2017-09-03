/**
 * Copyright (C) 2015- 2017 Enrique P. Pineda
 */

import Die from './die'
export default class ChallengeDie extends Die {
    static _color = 'purple'
    static _sides = [
        'chaos', 'dual-crossed',
        'blank', 'crossed', 
        'dual-skulls', 'dual-crossed',
        'skull', 'crossed'
    ]
    constructor() {
        super(ChallengeDie._color, ChallengeDie._sides)
    }
}
