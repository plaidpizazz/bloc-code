var fizzBuzzCustom = function(stringOne, stringTwo, numOne, numTwo) {
  var i;
  var output;
  for (i = 1; i <= 100; i++) {
    output = '';
    if ( i % numOne !== 0) { output += stringOne; }
    if ( i % numTwo !== 0) { output += stringTwo; }
    console.log(output || i);
    }
};
fizzBuzzCustom("Fizz", "Buzz", 3, 5);

var fizzBuzzCustom = function(stringOne, stringTwo, numOne, numTwo) {
  var i;
  var output;
  for (i = 1; i <= 100; i++) {
    output = '';
    if (i % numOne === 0) {
      output = stringOne;
      } else if (i % numTwo === 0) {
      output = stringTwo;
      } else if (i % numOne !== 0 && i % numTwo !== 0) {
      output = i;
      }
    console.log(output);
    }
};
fizzBuzzCustom();