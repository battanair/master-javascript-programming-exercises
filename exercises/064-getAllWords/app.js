function getAllWords(str) {
    // your code here
    const myArray = str.split(" ");
    return myArray;
}

let output = getAllWords('Radagast the Brown');
console.log(output); // --> ['Radagast', 'the', 'Brown']
