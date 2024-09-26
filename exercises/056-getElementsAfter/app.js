function getElementsAfter(array, n) {
  // your code here
  var nueva = array.slice(n + 1);
  return nueva; 
}

let output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2); 
console.log(output); // --> ['d', 'e']
