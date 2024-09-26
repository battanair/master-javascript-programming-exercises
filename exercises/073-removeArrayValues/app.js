function removeArrayValues(obj) {
    // your code here
    for(let key in obj){
        if(obj[key].length > 0){
            delete obj[key];
        }
    }
    return obj;
}