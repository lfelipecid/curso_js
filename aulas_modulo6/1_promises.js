function randNum(min, max) {
    min *= 1000
    max *= 1000
    return Number(Math.random() * (max - min) + min).toFixed()
}

// function esperaAi(msg, tempo, cb) {
//     setTimeout(() => {
//         console.log(msg)
//         if(cb) cb() // Cria call back's 
//     }, tempo)
// }

// forma async
// esperaAi('Frase 1', randNum(1,3))
// esperaAi('Frase 2', randNum(1,3))
// esperaAi('Frase 3', randNum(1,3))

// com call back
// esperaAi('Frase 1', randNum(1,3), function(){
//     esperaAi('Frase 2', randNum(1, 3), function() {
//         esperaAi('Frase 3', randNum(1, 3))
//     })
// })


// Method with Promiesse
function esperaPromessa(msg, tempo) {
    return new Promise((resolve, reject) => {

        if(typeof msg !== 'string') reject('BAD VALUE')

        setTimeout(() => {
            resolve(msg) // Entra no lugar do callback
        }, tempo)
    })
}


esperaPromessa('Frase 1', randNum(1, 3))
    .then(resp => {
        console.log(resp)
        return esperaPromessa('Frase 2', randNum(1, 3))
    })
    .then(resp => {
        return resp + ' ' + 'Outro then'
    })
    .then(resp => {
        console.log(resp)
        return esperaPromessa(12222, randNum(1, 3))
    })
    .then (resp => {
        console.log(resp)
    })
    .then (() => {
        console.log('Sou o último da fila.')
    })
    .catch(e => {
        console.log(e)
    })

console.log('JS não espera as promisses ele é um código ASYNC')