function getElementsUpTo(array, n) {
  // your code here
  var ars = array.slice(0,n);
  return ars;
}

let output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3) 
console.log(output); // --> ['a', 'b', 'c']
