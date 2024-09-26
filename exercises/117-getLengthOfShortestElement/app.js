function getLengthOfShortestElement(arr) {
    // your code here
    if(arr.length === 0){
        return 0;
    }else{
        var short = arr[0];
        for (let i = 0; i < arr.length; i++){
            if(short.length > arr[0].length){
                short = arr[i];
            }
        }
        return short.length;
    }
}

let output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3
