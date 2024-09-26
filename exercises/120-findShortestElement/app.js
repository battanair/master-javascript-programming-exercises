function findShortestElement(arr) {
    // your code here
    if(arr.length === 0){
        return "";
    }else{
        var short = arr[0];
        for(let i = 0; i < arr.length; i++){
            if(arr[0].length < short.length){
                short = arr[i];
            }
        }
        return short;
    }
}

let output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'