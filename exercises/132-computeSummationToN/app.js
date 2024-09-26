function computeSummationToN(n) {
  // your code here
  var loco = 0;
  for(i = 0; i <= n; i++){
    loco = loco + i;
  }
  return loco;
}

let output = computeSummationToN(6);
console.log(output); // --> 21

