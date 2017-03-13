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

function transposeTwoStrings(matrix) {
  let m = [];
  for (let j = 0; j < matrix[0].length; j++)
  {
    let temp = [];
    for (let i = 0; i < matrix.length; i++)
      temp.push(matrix"[i]");
    m.push(temp);
  }
  return m;
}
transposeTwoStrings(["Hello", "World"]);