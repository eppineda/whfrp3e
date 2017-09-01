/**
 * Copyright (C) 2015- 2017 Enrique P. Pineda
 */

export class Die {
    static _color
    static _sides
    constructor(color, sides) {
        Die._color = color
        Die._sides = sides
    }
    static roll() { return Die._sides[Math.floor(Math.random() * Die._sides.length)] }
}
