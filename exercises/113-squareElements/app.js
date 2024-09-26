function squareElements(arr) {
  // your code here
  var NewArray = [];
  for(let i = 0; i < arr.length; i++){
    NewArray.push(arr[i]*arr[i]);
  }
  return NewArray;
}

let output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]
