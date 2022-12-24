const frutas = ['Maça', 'Uva', 'Manga', 'Melancia']

const pessoas = {
    nome: 'Felipe',
    sobrenome: 'Cid',
    idade: 39,
}

// For Classico = Interáveis (Array ou Strings)
// For In =  Retorna o índice ou chave (string, array ou objetos)
// For of = Retorna o valor em si (Interáveis)

// For tradicional
// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i])
// } 

// // For in
// for (let i in frutas) {
//     console.log(frutas[i])
// }

// For over objectcs
// for (let i in pessoas) {
//     console.log(i, pessoas[i])
// }

// // For of, parse over results
// for (let i of frutas) {
//     console.log(i)
// }

// For Each
frutas.forEach(function (e) {
    console.log(e)
})

