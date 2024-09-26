function findShortestWordAmongMixedElements(arr) {
    // your code here
    if(arr.length === 0){
        return "";
    }else{
        var strings = [];
        for(let i =0; i<arr.length; i++){
            if(typeof arr[i] === 'string'){
                strings.push(arr[i]);
            }
        }
        if (strings.length === 0) {
            return "";
        }
        var largest = strings[0];
        for(let y = 0; y< strings.length; y++){
            if(strings[y].length < largest.length){
                largest = strings[y]
            }
        }
        return largest;
    }
}

let output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'
