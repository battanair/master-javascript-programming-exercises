// Write your function here
function getNthElementOfProperty(obj, key, n){
    if(obj.hasOwnProperty(key)){
        return obj[key][n];
    }else{
        return undefined;
    }
}
