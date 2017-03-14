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

function transposeTwoStrings(a) {
    return Object.keys(a[0]).map(
        function (c) { return a.map(function (r) { return r[c]; }); }
        );
    }
    
 transposeTwoStrings(["Hello", "World"]);