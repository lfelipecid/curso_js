const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

// Retorne a soma do doboro de todos os pares
// -> Filtrar Pares.
// -> Dobrar Valores.
// -> Somar todos os valores.

const somaTudo = numeros.filter(v => v % 2 == 0).map(v => v * 2).reduce((a, v) => a + v)
console.log(somaTudo)
