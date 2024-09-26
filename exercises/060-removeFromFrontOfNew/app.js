function removeFromFrontOfNew(arr) {
    // your code here
    var nuevo = [];
    for(let i = 0; i< arr.length -1 ; i++){
        nuevo[i] = arr[i+1];
    } 
    return nuevo;
}

let arr = [1, 2, 3];
let output = removeFromFrontOfNew(arr);
console.log(output); // --> [2, 3]
console.log(arr); // --> [1, 2, 3]
