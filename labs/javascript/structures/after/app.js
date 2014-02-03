function isFizz(number) {
	return (number % 3 === 0);
}

function isBuzz(number) {
	return (number % 5 === 0);
}

function fizzBuzz(number) {
	if(isFizz(number) && isBuzz(number)) return 'FizzBuzz';
	if(isFizz(number)) return 'Fizz';
	if(isBuzz(number)) return 'Buzz';

	return number + '';
}

for (var i=1; i < 20; i++) {
	console.log(i, 'is', fizzBuzz(i));
}
