// Practice with functional, prototypal, and pseudoclassical classes
// Make class constructor (with each style) to create objects for everyone in my family

// FUNCTIONAL CLASS PATTERN
var familyMember = function(name, gender, age, occupation) {
  var person = {};
  person.name = name;
  person.gender = gender;
  person.age = age;
  person.occupation = occupation;
  person.ageOneYear = function () {
  	person.age++;
  };
  return person;
}

var mom = familyMember('Carol', 'Female', 59, 'Banker');
var dad = familyMember('Robert', 'Male', 100, 'Teacher');
var forbes = familyMember('Forbes', 'Male', 28, 'Engineer');
var kevin = familyMember('Kevin', 'Male', 23, 'Student');

console.log(mom, dad, forbes, kevin);

mom.ageOneYear();
dad.ageOneYear();
forbes.ageOneYear();
kevin.ageOneYear();

console.log(mom, dad, kevin, forbes);


// FUNCTIONAL-SHARED CLASS PATTERN
// with additional shared function
var familyMember = function(name, gender, age, occupation) {
  var person = {};
  person.name = name;
  person.gender = gender;
  person.age = age;
  person.occupation = occupation;
  person.ageOneYear = ageOneYear;
  person.capitolizeName = capitolizeName;
  return person;
}

function ageOneYear() {
	this.age++;
}

function capitolizeName() {
	this.name = this.name.toUpperCase();
}

var mom = familyMember('Carol', 'Female', 59, 'Banker');
var dad = familyMember('Robert', 'Male', 100, 'Teacher');
var forbes = familyMember('Forbes', 'Male', 28, 'Engineer');
var kevin = familyMember('Kevin', 'Male', 23, 'Student');

console.log(mom, dad, forbes, kevin);

mom.ageOneYear();
mom.capitolizeName();
dad.ageOneYear();
dad.capitolizeName();
forbes.ageOneYear();
forbes.capitolizeName();
kevin.ageOneYear();
kevin.capitolizeName();

console.log(mom, dad, kevin, forbes);


// PROTOTYPAL CLASS PATTERN
var familyMember = function(name, gender, age, occupation) {
  var person = Object.create(familyMember.prototype)
  person.name = name;
  person.gender = gender;
  person.age = age;
  person.occupation = occupation;
  return person;
}

familyMember.prototype.ageOneYear = function() {
	this.age++;
}

familyMember.prototype.capitolizeName = function() {
	this.name = this.name.toUpperCase();
}

//This time the functions should not show when we log the instances of familyMember
// but they should work when called because they are part of the fallback familyMember.prototype object

var mom = familyMember('Carol', 'Female', 59, 'Banker');
var dad = familyMember('Robert', 'Male', 100, 'Teacher');
var forbes = familyMember('Forbes', 'Male', 28, 'Engineer');
var kevin = familyMember('Kevin', 'Male', 23, 'Student');

console.log(mom, dad, forbes, kevin);

mom.ageOneYear();
mom.capitolizeName();
dad.ageOneYear();
dad.capitolizeName();
forbes.ageOneYear();
forbes.capitolizeName();
kevin.ageOneYear();
kevin.capitolizeName();

console.log(mom, dad, kevin, forbes);


// PSEUDOCLASSICAL CLASS PATTERN
var familyMember = function(name, gender, age, occupation) {
  // var person = Object.create(familyMember.prototype) - NO LONGER NEED DUE TO 'new' KEYWORD
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.occupation = occupation;
  // return person; - NO LONGER NEED DUE TO 'new' KEYWORD
}

familyMember.prototype.ageOneYear = function() {
	this.age++;
}

familyMember.prototype.capitolizeName = function() {
	this.name = this.name.toUpperCase();
}

var mom = new familyMember('Carol', 'Female', 59, 'Banker');
var dad = new familyMember('Robert', 'Male', 100, 'Teacher');
var forbes = new familyMember('Forbes', 'Male', 28, 'Engineer');
var kevin = new familyMember('Kevin', 'Male', 23, 'Student');

console.log(mom, dad, forbes, kevin);

mom.ageOneYear();
mom.capitolizeName();
dad.ageOneYear();
dad.capitolizeName();
forbes.ageOneYear();
forbes.capitolizeName();
kevin.ageOneYear();
kevin.capitolizeName();

console.log(mom, dad, kevin, forbes);


console.log(mom instanceof familyMember); // logs 'true'

