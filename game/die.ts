/**
 * Copyright (C) 2015- 2017 Enrique P. Pineda
 */

export default class Die {
    _color
    _sides
    constructor(color, sides) {
        this._color = color
        this._sides = sides
    }
    roll() { return this._sides[Math.floor(Math.random() * this._sides.length)] }
}
