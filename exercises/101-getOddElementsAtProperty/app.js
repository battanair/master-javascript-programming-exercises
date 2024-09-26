function getOddElementsAtProperty(obj, key) {
    // your code here
    var result = [];
    if(Array.isArray(obj[key])){  
      for(let i = 0; i < obj[key].length; i++){
        if(obj[key][i] % 2 != 0){
          result.push(obj[key][i]);
        }
      }
      return result;
    }else{
      return result;
    }
}

let obj = {
  key: [1, 2, 3, 4, 5]
};
let output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]
