function computePower(num, exponent) {
  // your code here
  let resultado = 1;
  for(i = 0; i < exponent; i++){
    
    resultado = resultado * num;
  }
  return resultado;
}

let output = computePower(2, 3);
console.log(output); // --> 8
