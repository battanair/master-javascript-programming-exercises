function getAllElementsButNth(array, n) {
    // your code here
    // Crear una copia del array original
    let newArray = array.slice();
    // Eliminar el elemento en la posición n
    newArray.splice(n, 1);
    // Retornar el nuevo array
    return newArray;
    
}

let output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']
