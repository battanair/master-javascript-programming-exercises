function convertDoubleSpaceToSingle(str) {
    // your code here
    var NewArray = str.replaceAll('  ', ' ');
    return NewArray;
}

let output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"
