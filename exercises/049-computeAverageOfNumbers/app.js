// Write your function here
function computeAverageOfNumbers(arr){
    var suma = 0;
    if( arr.length === 0){
        return 0;
    }else{
    for(var i = 0; i < arr.length ; i++){
        suma += arr[i];
    }
    }
    
    var promedio = suma / arr.length;
    return promedio;
};
let input = [1, 2, 3, 4, 5];
let output = computeAverageOfNumbers(input);

console.log(output);
