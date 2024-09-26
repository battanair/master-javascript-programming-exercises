function joinArrayOfArrays(arr) {
  // your code here
  var todo = [];
  for (let i = 0; i < arr.length; i++){
    todo = todo.concat(...arr[i]);
  }
  return todo;
}

let output = joinArrayOfArrays([
  [1, 4],
  [true, false],
  ['x', 'y'],
]);

console.log(output); // --> [1, 4, true, false, 'x', 'y']
