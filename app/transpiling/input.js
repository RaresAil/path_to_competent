const carPlateGenerator = require('../../utils/carPlateGenerator');

const carNumber = Symbol('number');

class Car {
  constructor(owner, name, model, region) {
    this.owner = owner;
    this.name = name;
    this.model = model;
    this[carNumber] = carPlateGenerator(region);
  }

  get number() {
    return this[carNumber];
  }

  generateNewNumber(region) {
    this[carNumber] = carPlateGenerator(region);
  }
}

const car = new Car('', '', '', 'NT');
const number = car.number;

car.generateNewNumber('NT');

console.log(JSON.stringify([number, car.number]));
