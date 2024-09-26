function getAverageOfElementsAtProperty(obj, key) {
  if (obj[key] === undefined) {
    return 0;
  }
  if (!Array.isArray(obj[key])) {
    return 0;
  }
  if (obj[key].length === 0) {
    return 0;
  }
  
  let sum = 0;
  for (let i = 0; i < obj[key].length; i++) {
    sum += obj[key][i];
  }
  return sum / obj[key].length;
}