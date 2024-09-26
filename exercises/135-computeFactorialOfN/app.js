function computeFactorialOfN(n) {
    // your code here
    var loco = 1;
    for(let i=1; i <= n; i++){
        loco = loco * i;
    }
    return loco;
}

let output = computeFactorialOfN(4);
console.log(output); // --> 24
