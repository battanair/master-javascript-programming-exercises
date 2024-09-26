function getElementOfArrayProperty(obj, key, index) {
    // your code here
    if(!Array.isArray(obj[key])){
        return undefined;
    }

    if(Array.isArray.length === 0){
        return undefined;
    }

    if(index < obj[key].length){
        return obj[key][index];
    }
}

let obj = {
    key: ['Jamil', 'Albrey']
};
let output = getElementOfArrayProperty(obj, 'key', 0); 
console.log(output); // --> 'Jamil'
