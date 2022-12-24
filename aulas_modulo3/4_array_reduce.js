const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const pessoas = [
    { nome: 'Luiz', idade: 50 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
]

//Retorne a somas de todos os valores
const somaNum = numeros.reduce((a, v) => {
    a += v
    return a // Retorna o acumulador
}, 0 )  // Acumulador de valores, com valor inicial em 0
// console.log(somaNum)

const somaPares = numeros.reduce((a, v) => {
    if (v % 2 == 0) a += v
    return a
}, 0)
// console.log(somaPares)

// Retorne um array com os pares (filter)
const pares = numeros.reduce((a, v) => {
    if (v % 2 == 0) a.push(v)
    return a
}, [] ) // Gera uma lista em vez de acumulador
// console.log(pares)

// Retorne um array com o dobro dos valores(map)
const mult = numeros.reduce((a, v) => {
    a.push(v*2)
    return a
}, []) // Transforma acumulador em array
// console.log(mult)


// Retorne pessoa mais velha do Objeto
/* ACUMULADOR referencia primeiro objeto, VALOR referencia segundo objeto*/
const maisVelho = pessoas.reduce((a, v) => {
    if (a.idade > v.idade) {
        return a
    } else {
        return v
    }
    
})
console.log(maisVelho)