// ARRAY          0       1        2        3           4
// const pessoas = ['joão', 'maria', 'joana', 'wallace', 'rosana']
// const novo = pessoas.slice(0, -3) // Slice Array
// console.log(novo)
// const nome = 'Luis Felipe Melo Cid'
// const nomes = nome.split(' ') // Convert String to Array
// const nomesPessoas = pessoas.join(' ') // Convert Array to String
// console.log(nomes)
// console.log(nomesPessoas)

//Splice pop
// nomes.splice(indice, delete, elem1, elem2, elem3)

//Splice push
// nomes.splice(nomes.lenght, 0, elem1 )


/* Concatenar Array */
const a1 = [1, 2, 3]
const a2 = [4, 5, 6]
 
const a3 = a1.concat(a2)
console.log(a3)

const a4 = [...a1, ...a2]
console.log(a4)


/* For Each */
let total = 0
a4.forEach(v => {
    total += total
})