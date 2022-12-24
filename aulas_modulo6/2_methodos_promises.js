function randNum(min, max) {
    min *= 1000
    max *= 1000
    return Number(Math.random() * (max - min) + min).toFixed()
}

function esperaai(msg, tempo) {
    return new Promise((response, reject) => {
        // response
        setTimeout(() => {
            response(msg)
        }, tempo)
        // reject
        if (typeof msg !== 'string') {
            reject('Bad Value')
            // return // Para execução
        }
    })
}


/*
Pormise.all = Executa todas promessas do Array
Promise.race = Retorna a promessa que for mais rápida.
Promise.resolve = Metodo para retornar promise

*/

// const promises = [
//     'Primeiro valor',
//     esperaai('Frase 1', randNum(1, 3)),
//     esperaai('Frase 2', randNum(1, 3)),
//     esperaai('Frase 3', randNum(1, 3)),
//     'Outro Valor'
// ]

// Executa promessa em ordem
// Promise.all(promises)
//     .then(v => {
//         console.log(v)
//     })
//     .catch(e => {
//         console.log(e)
//     })

// Executa promessa que responder primeiro
// const prom_race = [
//     esperaai('Frase 1', 3000),
//     esperaai('Frase 2', 500),
//     esperaai('Frase 3', 2000),
// ]

// Promise.race(prom_race)
//     .then(v => {
//         console.log(v)
//     })
//     .catch(e => {
//         console.log(e)
//     })


function baixaPagina() {
    const emChace = false
    
    if (emChace){
        return Promise.resolve('Pagina em Chace')
    } else {
        return esperaai('Baixei Página', 3000)
    }

}

baixaPagina()
    .then(r => {
        console.log(r)
    })
    .catch(e => {
        console.log(e)
    })