function getLargestElementAtProperty(obj, key) {
    // your code here
    if(!Array.isArray(obj[key])){
      return [];
    }

    if(obj[key].length === 0){
      return [];
    }

    let biggest = obj[key][0];
    for(let i = 0; i < obj[key].length; i++){
      if(obj[key][i] > biggest){
        biggest = obj[key][i];
      }
      
    }
    return biggest;
}

let obj = {
  key: [1, 2, 4]
};
let output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4
