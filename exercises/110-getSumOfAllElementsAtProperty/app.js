function getSumOfAllElementsAtProperty(obj, key) {
    // your code here
    if(!Array.isArray(obj[key])){
        return 0;
    }
    if(obj[key].length === 0){
        return 0;
    }
    var suma = 0;
    for(let i = 0; i < obj[key].length; i++){
        suma = suma + obj[key][i];
    }
    return suma;
}

let obj = {
    key: [4, 1, 8]
};
let output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13
