// Write your function here

function getFirstElementOfProperty(objeto, key){
   if(objeto.hasOwnProperty(key)){
    return objeto[key][0];
   }else{
    return undefined;
   }
}
