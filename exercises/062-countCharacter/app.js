function countCharacter(str, char) {
    // your code here
    var letter = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] === char){
           letter = letter +1;
        }
    }
    return letter;
}

let output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3
