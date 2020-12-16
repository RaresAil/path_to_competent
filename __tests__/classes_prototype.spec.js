const { expect } = require('chai');
const { Car } = require('../app/classes_prototype');

describe('App | Classes & Prototype', () => {
  const car = new Car('Rares', 'A', '1');
  const numberPlate = car.number;

  it('Should generate a new car number', () => {
    car.generateNewNumber('NT');
    expect(numberPlate).to.not.be.deep.equal(car.number);
  });

  it('Should change the owner', () => {
    expect(car.owner).to.be.deep.equal('Rares');

    car.owner = 'Dan';
    expect(car.owner).to.be.deep.equal('Dan');
  });

  it('Should not be able to change the model and/or name', () => {
    expect(car.name).to.be.deep.equal('A');
    expect(car.model).to.be.deep.equal('1');

    car.name = 'B';
    car.model = '2';

    expect(car.name).to.be.deep.equal('A');
    expect(car.model).to.be.deep.equal('1');
  });

  it('Should not be able to change the car number without using the function', () => {
    car.number = 'LOREM';
    expect(car.number).to.not.be.deep.equal('LOREM');
  });

  it('Check the static variable for Car', () => {
    expect(Car.numberOfCreatedCars).to.be.deep.equal(1);
    const _ = new Car();
    expect(Car.numberOfCreatedCars).to.be.deep.equal(2);
  });
});
