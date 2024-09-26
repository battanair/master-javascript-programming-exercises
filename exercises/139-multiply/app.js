function multiply(num1, num2) {
    // your code here
    var suma = 0;
    for(i =1; i <= num2; i++){
        suma = suma + num1;
    }
    return suma;
}

let output = multiply(4, 7);
console.log(output); // --> 28
