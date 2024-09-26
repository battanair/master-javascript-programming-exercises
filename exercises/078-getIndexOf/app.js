// Write your function here
function getIndexOf(letter, text){
    var cuenta = []
    for (let i = 0; i < text.length; i++) {
        if (text[i] === letter) {
            return i;
        }
    }
    return -1;
}

