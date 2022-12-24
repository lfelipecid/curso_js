// function soma(x, y) {

//     if (typeof x !== 'number' || typeof y !== 'number') {
//         throw new Error('X e Y precisa ser números')
//     }
//     return x + y
// }

// try {
//     console.log(soma(1, 2))
//     console.log(soma('1', 2))
// } catch (e) {
//     console.log(`ERROR: ${e}`)
// }

// try {
//     console.log('Abrir um arquivo')
//     console.log('Manipulei error')
//     console.log(a)
//     console.log('Fechi arquvio')
// } catch(e) {
//     console.log('Tratando error')
// } finally {
//     console.log('Sempre sou executado no fim')
// }



function retornaHora(data) {
    if (data && !(data instanceof Date)) throw new TypeError ('Esperando instancia de error')
    if (!data) data = new Date()

    return data.toLocaleTimeString('pt-BR')
}

console.log(retornaHora(11))