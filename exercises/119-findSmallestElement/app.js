function findSmallestElement(arr) {
    // your code here
    if(arr.length === 0){
        return 0;
    }else{
        var short = arr[0];
        for(let i = 0; i<arr.length; i++){
            if(short > arr[i]){
                short = arr[i];
            }
        }
        return short;
    }
}

let output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1