/* ALTERA ARRAY EM QUESTÃO */

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const pessoas = [
    { nome: 'Luiz', idade: 50 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
]

/* MAP Altera valores do Array */
const dobra = numeros.map(v => v * 2)
// console.log(numeros)
// console.log(dobra)

//Retorne apenas nome das pessoas 
const nomes = pessoas.map(v => v.nome)
// console.log(nomes)

// Remova apenas a chave 'nome' do objeto
const objIdade = pessoas.map(v => ({ idade: v.idade }))
// console.log(objIdade)

// Adicione uma chave id em casa objeto SEM ATLERAR o OBJETO INICIAL
const pessoasId = pessoas.map(v => {
    let _id = 0
    _id++
    const newObj = {...v}
    newObj.id = _id 
    return newObj
})

console.log(pessoas)
console.log(pessoasId)

// ALTERANDO Objeto inicial
pessoas.map(v => {
    let _id = 0
    _id++
    v.id = _id
    return v
})

console.log(pessoas)