function computeProductOfAllElements(arr) {
  // your code here
  if(arr.length === 0){
    return 0;
  }else{
    var New = 1;
    for(let i = 0; i < arr.length; i++){
      New = New * arr[i];
    }
  }
  return New;
}

let output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60
