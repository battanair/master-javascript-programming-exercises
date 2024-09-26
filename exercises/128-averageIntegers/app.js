function average(arr) {
  // your code here
  var long = sum(arr) / arr.length;
  return long;
}

function sum(arr) {
  // your code here
  var amigui = 0;
  for(let i= 0; i< arr.length; i++){
    amigui = amigui + arr[i];
  }
  return amigui;
}

console.log(average([1, 2])); // --> 1.5
