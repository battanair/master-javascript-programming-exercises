function computeSumOfAllElements(arr) {
  // your code here
  var todo = 0;
  for(let i = 0; i < arr.length; i++){
    todo = todo + arr[i];
  }
  return todo;
}

let output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6
