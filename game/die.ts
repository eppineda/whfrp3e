/**
 * Copyright (C) 2015- 2017 Enrique P. Pineda
 */

export default class Die {
    _color:string
    _sides:string[]
    constructor(color, sides) {
        this._color = color
        this._sides = sides
    }
    roll():string { return this._sides[Math.floor(Math.random() * this._sides.length)] }
}
