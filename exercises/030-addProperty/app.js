function addProperty(obj, key) {
  // your code here
  obj[key] = true;
  return obj;
}

let objeto = {};
let output = addProperty(objeto, 'nuevaPropiedad');
console.log(output);
