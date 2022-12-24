
// Declaração Hosting, pode fazer em qualquer lugar do código
function falaOi() {
    console.log('oi')
}

// Funções são obejetos de primeira classe
const souumdado = function() {
    console.log('Sou um dado')
}

// Uma função pode executar outra função
function executaFuncao(funcao) {
    console.log('Vou executar função: ')
    funcao()
}

// executaFuncao(souumdado)


// Arrowfunction
const arrow = () => {
    console.log('Sou uma arrow function')
}

// Dentro de um objeto
const obj = {
    falar() {
        console.log('Estou falando')
    },
    ouvir: function () {
        console.log('Estou ouvindo')
    }

}

obj.falar()
obj.ouvir()