function getAllLetters(str) {
    // your code here
    var cuenta = [];
    for(let i = 0; i < str.length; i++){
        cuenta[i] = str[i];
    }
    return cuenta;
}

let output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']
