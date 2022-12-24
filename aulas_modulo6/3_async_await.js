function rand(min, max) {
    min *= 1000
    max *= 1000
    return Number(Math.random() * (max - min) + min).toFixed()
}

function espera(msg, tempo) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            // Reject
            if (typeof msg !== 'string') {
                reject('BAD VALUE')
                return
            }

            resolve(msg.toUpperCase() + ' - Passei no resolve')

        }, tempo)
    })
}

// Tradicional
// espera('Fase 1', rand(1, 3))
//     .then(r => {
//         console.log(r)
//         return espera('Fase 2', rand(1, 3))
//     })
//     .then(r => {
//         console.log(r)
//         return espera('Fase 3', rand(1, 3))
//     })
//     .then(r => {
//         console.log(r)
//         return r
//     })
//     .then(r => {
//         console.log('Terminamos em', r)
//     })
//     .catch(e => {
//         console.log(e)
//     })

// Async Await
async function executa() {

    const fase1 = await espera('Fase 1', rand(1, 3))
    console.log(fase1)

    const fase2 = await espera('Fase 2', rand(1, 3))
    console.log(fase2)

    const fase3 = await espera('Fase 3', rand(1, 3))
    console.log(fase3)

    console.log('Terminamos em:', fase3)
}

executa()