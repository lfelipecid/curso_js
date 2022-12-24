function mostraHora() {
    let data = new Date()
    return data.toLocaleTimeString('pt-BR')
}


// // Cria um loop atrvés com um intervalo determinado
// const timer = setInterval(function () {
//     console.log(mostraHora())
// }, 1000)


// // Cancela o intervalo, depois do tempo deterimnado
// setTimeout(function(){
//     clearInterval(timer)
// }, 10000)


// Executa alguma função depois de determinado tempo
setTimeout(function(){
    console.log('Olá Mundo')
}, 5000)