function getProductOfAllElementsAtProperty(obj, key) {
    // your code here
    if(!Array.isArray(obj[key])){
      return 0;
    }

    if(obj[key].length === 0){
      return 0;
    }
    var multi = 1;
    for(let i = 0; i < obj[key].length; i++){
       multi = multi * obj[key][i];
    }
    return multi;
}

let obj = {
  key: [1, 2, 3, 4]
};
let output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24
