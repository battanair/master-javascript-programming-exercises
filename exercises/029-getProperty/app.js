function getProperty(obj, key) {
  // your code here
  return obj[key];
}
let circo = {payaso: 'bozo'};
let output = getProperty(circo, 'payaso');
console.log(output); 
