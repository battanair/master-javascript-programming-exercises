function getEvenLengthWordsAtProperty(obj, key) {
  if (!Array.isArray(obj[key])) {
    return [];
  }
  
  let result = [];
  for (let i = 0; i < obj[key].length; i++) {
    if (obj[key][i].length % 2 === 0) {
      result.push(obj[key][i]);
    }
  }
  return result;
}

let obj = {
  key: ['a', 'long', 'game']
};
let output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']