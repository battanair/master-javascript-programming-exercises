// Write your function here
function getElementsThatEqual10AtProperty(obj, key){
    const loco = [];
    if(Array.isArray(obj[key])){
        for(let i = 0; i < obj[key].length; i++){
        if(obj[key][i] === 10){
            loco.push(obj[key][i]);
        }
    }}else{
        return loco;
    }
    return loco;
}