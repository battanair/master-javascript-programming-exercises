// Write your function here
function getElementsLessThan100AtProperty(obj, key){
    const loco = [];
    if(Array.isArray(obj[key])){
        for(let i = 0; i < obj[key].length; i++){
           if(obj[key][i] < 100){
            loco.push(obj[key][i]);
           }
            
        }
    }else{
        return loco;
    }
    return loco;
}
