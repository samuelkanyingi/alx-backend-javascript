import Currency from './3-currency';

class Pricing {
    constructor(amount, currency) {
        // Validate types
        this._validateNumber(amount, 'Amount');
        this._validateCurrency(currency);

        // Assign attributes
        this._amount = amount;
        this._currency = currency;
    }

    // Getter for amount
    get amount() {
        return this._amount;
    }

    // Setter for amount
    set amount(newAmount) {
        this._validateNumber(newAmount, 'Amount');
        this._amount = newAmount;
    }

    // Getter for currency
    get currency() {
        return this._currency;
    }

    // Setter for currency
    set currency(newCurrency) {
        this._validateCurrency(newCurrency);
        this._currency = newCurrency;
    }

    // Method to display the full price
    displayFullPrice() {
        return `${this._amount} ${this._currency.displayFullCurrency()}`;
    }

    // Static method to convert price
    static convertPrice(amount, conversionRate) {
        return amount * conversionRate;
    }

    // Validation methods
    _validateNumber(value, attributeName) {
        if (typeof value !== 'number') {
            throw new TypeError(`${attributeName} must be a number`);
        }
    }

    _validateCurrency(currency) {
        if (!(currency instanceof Currency)) {
            throw new TypeError('Currency must be an instance of Currency');
        }
    }
}

export default Pricing;
