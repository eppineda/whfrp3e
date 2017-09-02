/**
 * Copyright (C) 2015- 2017 Enrique P. Pineda
 */

import Die from './die'

export default class ChallengeDie extends Die {
    constructor() {
        super('purple', [
            'chaos', 'dual-crossed',
            'blank', 'crossed', 
            'dual-skulls', 'dual-crossed',
            'skull', 'crossed'
        ])
    }
    roll() { return Die.roll() }
}
