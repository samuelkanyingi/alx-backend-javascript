const cloneKey = Symbol('cloneCar');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  [cloneKey]() {
    const clonedCar = new Car();
    Object.getOwnPropertyNames(Object.getPrototypeOf(this)).forEach((prop) => {
      clonedCar[prop] = this[prop];
    });
    return clonedCar;
  }

  cloneCar() {
    return this[cloneKey]();
  }
}
