function getSquaredElementsAtProperty(obj, key) {
    // your code here
    var Result = [];
    if(Array.isArray(obj[key])){
      for(let i = 0; i < obj[key].length; i++){
        Result.push(obj[key][i]*obj[key][i]);
      }
      return Result;
    }else{
      return Result;
    }
}

let obj = {
  key: [2, 1, 5]
};
let output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]
