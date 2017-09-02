/**
 * Copyright (C) 2015 - 2017 Enrique P. Pineda
 */

import Die from './die'

export default class ExpertiseDie extends Die {
    constructor() {
        super('yellow', [
            'hammer', '+hammer',
            'comet', 'eagle',
            'blank', 'eagle'
        ])
    }
    roll() { return Die.roll() }
}
