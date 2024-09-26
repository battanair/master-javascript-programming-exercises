function findSmallestNumberAmongMixedElements(arr) {
  // your code here
  if(arr.length === 0){
    return 0;
  }else{
    var loco = [];
    for(let i = 0; i<arr.length; i++){
      if(typeof arr[i] === 'number'){
        loco.push(arr[i]);
        }
    }
    if (loco.length === 0) {
      return 0;
  }
    var crazy = loco[0];
    for(let y = 1; y < loco.length; y++){
      if(loco[y] < crazy){
        crazy = loco[y];
      }
    }
    return crazy;
  }
  
}

let output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4
