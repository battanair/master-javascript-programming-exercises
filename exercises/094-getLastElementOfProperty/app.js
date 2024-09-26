// Write your function here
function getLastElementOfProperty(obj, key){
    if(Array.isArray(obj[key])){
        var loco = obj[key].length-1;
        return obj[key][loco];
    }else{
        return undefined;
    }
}