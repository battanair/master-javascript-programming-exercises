// Write your function here
function getOddLengthWordsAtProperty(obj, key){
    const loco = [];
    if(Array.isArray(obj[key])){
        for(let i = 0; i < obj[key].length; i++){
            if(obj[key][i].length % 2 !== 0){
                loco.push(obj[key][i]);
            }
        }
    }
    return loco;
}