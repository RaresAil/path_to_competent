'use strict';

const carPlateGenerator = require('../utils/carPlateGenerator');

// Symbols
const carNumber = Symbol('number');

// Static Variables
let numberOfCreatedCars = 0;
Object.defineProperty(Car, 'numberOfCreatedCars', {
  enumerable: true,
  get: function () {
    return numberOfCreatedCars || 0;
  }
});

// Constructor
function Car(owner, name, model, region) {
  numberOfCreatedCars++;

  this.owner = owner;

  // Read-Only Variables
  Object.defineProperty(this, 'name', {
    enumerable: true,
    writable: false,
    value: name
  });
  Object.defineProperty(this, 'model', {
    enumerable: true,
    writable: false,
    value: model
  });

  // Getter Setter variables
  // Public Getter
  Object.defineProperty(this, 'number', {
    enumerable: true,
    get: function () {
      return this[carNumber];
    }
  });
  // Private Setter
  Object.defineProperty(this, carNumber, {
    value: carPlateGenerator(region || 'NT'),
    enumerable: false,
    writable: true
  });
}

Car.prototype.generateNewNumber = function (region) {
  this[carNumber] = carPlateGenerator(region);
};

module.exports = {
  Car
};
