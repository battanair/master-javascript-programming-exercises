function getLengthOfLongestElement(arr) {
    // Your code here
    if(arr.length === 0){
        return 0;
    }else{
        for(let i = 0; i < arr.length; i++){
            var elmaslargo = 0;

            if(arr[i].length > elmaslargo){
                elmaslargo = arr[i];
            }
        }return elmaslargo.length;
    }}

let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5
