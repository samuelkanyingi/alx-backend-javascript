class Currency {
    constructor(code, name) {
        // Validate types
        this._validateString(code, 'Code');
        this._validateString(name, 'Name');

        // Assign attributes
        this._code = code;
        this._name = name;
    }

    // Getter for code
    get code() {
        return this._code;
    }

    // Setter for code
    set code(newCode) {
        this._validateString(newCode, 'Code');
        this._code = newCode;
    }

    // Getter for name
    get name() {
        return this._name;
    }

    // Setter for name
    set name(newName) {
        this._validateString(newName, 'Name');
        this._name = newName;
    }

    // Method to display the full currency format
    displayFullCurrency() {
        return `${this._name} (${this._code})`;
    }

    // Validation method
    _validateString(value, attributeName) {
        if (typeof value !== 'string') {
            throw new TypeError(`${attributeName} must be a string`);
        }
    }
}

export default Currency;
