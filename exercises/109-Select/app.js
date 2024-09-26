// Write your function here
function select(arr, obj) {
    var resultado = {}; // Paso 1: Crear un objeto vacío

    for (let i = 0; i < arr.length; i++) { // Paso 2: Iterar sobre el array `arr`
        if (obj.hasOwnProperty(arr[i])) { // Paso 3: Verificar si la clave existe en el objeto `obj`
            resultado[arr[i]] = obj[arr[i]]; // Paso 4: Añadir la clave y su valor al nuevo objeto
        }
    }

    return resultado; // Devolver el objeto resultado
}