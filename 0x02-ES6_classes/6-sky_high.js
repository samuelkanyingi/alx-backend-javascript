#!/usr/bin/node

import Building from './5-building.js';

class SkyHighBuilding extends Building {
    constructor(sqft, floors) {
        super(sqft);
        // Validate that floors is a number
        if (typeof floors !== 'number') {
            throw new TypeError('Floors must be a number');
        }
        this._floors = floors;
    }

    // Getter for floors
    get floors() {
        return this._floors;
    }

    // Override evacuationWarningMessage method
    evacuationWarningMessage() {
        return `Evacuate slowly the ${this._floors} floors`;
    }
}

export default SkyHighBuilding;
