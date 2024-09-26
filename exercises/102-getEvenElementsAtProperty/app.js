function getEvenElementsAtProperty(obj, key) {
    // your code here
    var Result = [];
    if(Array.isArray(obj[key])){
        for(let i = 0; i < obj[key].length; i++){
          if(obj[key][i] % 2 === 0){
            Result.push(obj[key][i]);
          }
        }
        return Result;
    }else{
      return Result;
    }
}

let obj = {
  key: [1000, 11, 50, 17]
};
let output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]
