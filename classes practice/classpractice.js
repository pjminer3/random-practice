console.log('we\'re connected');

class Human {
  constructor(firstName, lastName, yearOfBirth, sex) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.sex = sex;
  }

  // methods go here
  // first method
  formalName() {
    this.sex === 'M' ? this.namePrefix = 'Mr.' : this.namePrefix = 'Ms.';
    this.formalName = `${this.namePrefix} ${this.firstName} ${this.lastName}`; 
    return this.formalName;
  }
  // second method
  age() {
    this.age = new Date().getFullYear() - this.yearOfBirth;
  }
}

class Friend extends Human {
  constructor (firstName, lastName, yearOfBirth, sex, yearMet) {
    super(firstName, lastName, yearOfBirth, sex);
    this.yearMet = yearMet;
    this.yearsKnown = new Date().getFullYear() - this.yearMet; 
  }
}

const patrick = new Human('Patrick', 'Miner', 1992, 'M');
patrick.age();
console.log(patrick);


