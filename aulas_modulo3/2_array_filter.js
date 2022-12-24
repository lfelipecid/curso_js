/* NÃO REALIZA ALTERAÇÕES NO ARRAY, FILTRA ARRAY SOBRE UMA CONDIÇÃO BOOLEAN. */

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const numFilterArrow = numeros.filter((v) => v > 10)

// const numFilterRegular = numeros.filter(numFilter)

// function numFilter(v, i, a) {
//     console.log(a)
//     return v > 10
// }

// console.log(numFilterRegular)

const pessoas = [
    { nome: 'Luiz', idade: 50 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
]

// Retorne as pessoas que tem o nome com 5 letras ou mais
const pessoas5l = pessoas.filter(v => v.nome.length >= 5)
// console.log(pessoas5l)

// Retorne as pessoas com mais de 50 anos
const pessoas50 = pessoas.filter(v => v.idade > 50)
// console.log(pessoas50)

// Retorne as pessoas cujo nome termina com a
const pessoasA = pessoas.filter(v => v.nome.toLowerCase().endsWith('a'))
// console.log(pessoasA)

