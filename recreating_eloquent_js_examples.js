// family data; created with the pseudoclassical class pattern (although the familyMember.prototype object has nothing!)
function familyMember(name, sex, age) { 
	this.name = name;
	this.sex = sex;
	this.age = age;
}

var family = [];
family.push(new familyMember('Carol Zatorski', 'f', 59));
family.push(new familyMember('Rober Miner', 'm', 62));
family.push(new familyMember('Forbes Miner', 'm', 28));
family.push(new familyMember('Patrick Miner', 'm', 25));
family.push(new familyMember('Kevin Miner', 'm', 23));

console.log(family); // All checks out; we have an array of familyMember objects

// Create a function that, when given a name, returns the object
var byName = {};
family.forEach(function(familyMember) {
  byName[familyMember.name] = familyMember;
})

console.log(byName['Patrick Miner']);  // All checks out; logs the Patrick Miner object
