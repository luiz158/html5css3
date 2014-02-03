
var Mary = {
	name: 'Mary',
	surname: 'Strong',
	age: 31
};

var John = {
	name: 'John',
	surname: 'Smith',
	age: 32
};

console.log('Is John older than Mary?', Mary.age < John.age);

John.country = 'US';

John.country = John.country || 'Unknown';
Mary.country = Mary.country || 'Unknown';

console.log("John's country is", John.country);
console.log("Mary's country is", Mary.country);