console.log('we\'re connected');

const FAMILY = [];
const FRIENDS = [];

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

class Family extends Human {
  constructor(firstName, lastName, yearOfBirth, sex, relationToMe) {
    super(firstName, lastName, yearOfBirth, sex);
    this.relationToMe = relationToMe;
  }
}


const mom = new Family('Carol', 'Zatorski', 1957, 'F', 'Mother');
const dad = new Family('Robert', 'Miner', 1954, 'M', 'Father');
const forbes = new Family('Forbes', 'Miner', 1990, 'M', 'Older brother');
const kevin = new Family('Kevin', 'Miner', 1994, 'M', 'Younger brother');

FAMILY.push(mom);
FAMILY.push(dad);
FAMILY.push(forbes);
FAMILY.push(kevin);









// Classes are not hoisted
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
var jason, mike, jack, jeffrey;
jason = new Friend('Jason', 'Kopelman', 1992, 'M', 2000);
mike = new Friend('Michael', 'Levin', 1992, 'M', 2001);
jack = new Friend('Jack', 'Russell', 1992, 'M', 2010);
jeffrey = new Friend('Jeffrey', 'Wilcox', 1992, 'M', 1995);

FRIENDS.push(jason);
FRIENDS.push(mike);
FRIENDS.push(jack);
FRIENDS.push(jeffrey);

console.log(`My family is`);
FAMILY.forEach(member => console.log(member));
console.log(`My friends are`);
FRIENDS.forEach(member => console.log(member));



