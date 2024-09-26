function countAllCharacters(str) {
    // Inicializa un objeto vacío
    let characterCounts = {};

    // Recorre cada carácter del string
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        // Si el carácter ya está en el objeto, incrementa su conteo
        if (characterCounts[char]) {
            characterCounts[char]++;
        } else {
            // Si el carácter no está en el objeto, inicializa su conteo a 1
            characterCounts[char] = 1;
        }
    }

    // Retorna el objeto con los conteos de caracteres
    return characterCounts;
}