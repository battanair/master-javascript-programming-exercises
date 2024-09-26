function getSmallestElementAtProperty(obj, key) {
  // Verificar si la propiedad existe y es un array
  if (!Array.isArray(obj[key])) {
    return [];
  }

  // Verificar si el array está vacío
  if (obj[key].length === 0) {
    return [];
  }

  // Encontrar el número más pequeño
  let smallest = obj[key][0];
  for (let i = 1; i < obj[key].length; i++) {
    if (obj[key][i] < smallest) {
      smallest = obj[key][i];
    }
  }

  // Retornar el número más pequeño
  return smallest;
}
