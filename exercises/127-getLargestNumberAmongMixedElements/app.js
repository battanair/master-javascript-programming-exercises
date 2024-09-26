function getLargestNumberAmongMixedElements(arr) {
    // your code here
    let longestnum = -Infinity;
    for (element of arr){
        if(typeof element === 'number' && longestnum < element){
            longestnum = element;
        }
    }
    if(longestnum === -Infinity){
        return 0;
    }else{
        return longestnum;
    }
}

let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5
