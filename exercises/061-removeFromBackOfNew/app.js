function removeFromBackOfNew(arr) {
  // your code here
  var NewArray = [];
  for(let i = 0; i < arr.length - 1 ; i++){
    NewArray[i] = arr[i];
  }
  return NewArray;
}

let arr = [1, 2, 3];
let output = removeFromBackOfNew(arr);
console.log(output); // --> [1, 2]
console.log(arr); // --> [1, 2, 3]
