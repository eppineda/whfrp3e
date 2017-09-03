/**
 * Copyright (C) 2015 - 2017 Enrique P. Pineda
 */

export default class Player {
    _race
    _name
    _dicepool = []
    _career = {}
    _statistics = {}
    constructor(name, race) {
        function generateStatistics() {
            var stats = {}

            return stats
        }
        function randomizeCareer() {
            var career = ''

            return career
        }
        function initializeDicePool() {
            var pool = []

            return pool
        }
        this._name = name
        this._race = race
        this._career = randomizeCareer()
        this._statistics = generateStatistics()
        this._dicepool = initializeDicePool()
    }
    get race() { return this._race }
    get name() { return this._name }
    get dicepool() { return this._dicepool }
    set dicepool(p) { this._dicepool = p }
    get career() { return this._career }
    set career(c) { this._career = c }
    get statistics() { return this._statistics }
}
