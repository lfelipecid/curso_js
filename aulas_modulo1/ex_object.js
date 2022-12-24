// Cria objeto / dicionario
const pessoa1 = {
    nome: 'Luis Felipe',
    sobreNome: 'Cid',
    idade: '39',
}

// console.log(pessoa1.nome)
// console.log(pessoa1.sobreNome)
// console.log(pessoa1.idade)


// Cria novo objeto
function criaPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome, 
        idade: idade,
    }
}

const pessoa2 = criaPessoa('João Luis', 'Cid', 5)
// console.log(pessoa2)


// Cria objeto com função
const pessoa3 = {
    nome: 'Maria Luiza',
    sobrenome: 'Seoud',
    idade: 0.1,

    fala() {          
        console.log(`${this.nome} está falando oi e tem ${this.idade} anos...`)
    },

    incidade () {
        this.idade++
    },

}

pessoa3.incidade()
pessoa3.fala()