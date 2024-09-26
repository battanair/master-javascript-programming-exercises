function getAllButLastElementOfProperty(obj, key) {
    // your code here
    if(!Array.isArray(obj[key])){
      return [];
    }

    if(obj[key].length == 0){
      return [];
    }
  
    var newArray = obj[key].slice(0, -1);
    return newArray;
}

let obj = {
  key: [1, 2, 3]
};
let output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1, 2]
