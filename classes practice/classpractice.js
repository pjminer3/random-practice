console.log('we\'re connected');

class Human {
  constructor(firstName, lastName, yearOfBirth, sex) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.sex = sex;
  }

  // methods go here
  formalName() {
    this.sex === 'M' ? this.namePrefix = 'Mr.' : this.namePrefix = 'Ms.';
    this.formalName = `${this.namePrefix} ${this.firstName} ${this.lastName}`;
    return this.formalName;
  }

  age() {

  }
}

const patrick = new Human('Patrick', 'Miner', 1992, 'M');

console.log(patrick);