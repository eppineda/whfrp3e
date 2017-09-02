/**
 * Copyright (C) 2015- 2017 Enrique P. Pineda
 */

import { Die } from './die'

export class ConservativeDie extends Die {
    constructor() {
        super('green', [
            'blank', 'eagle', 'eagle', 'hourglass-hammer', 'hourglass-hammer',
            'hammer', 'hammer', 'hammer', 'hammer', 'eagle-hammer'
        ])
    }
    roll() { return Die.roll() }
}
