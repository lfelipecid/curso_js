const pessoa = {
    nome: 'felipe',
    sobrenome: 'cid',
}

// console.log(pessoa.nome)
// console.log(pessoa.sobrenome)

// console.log(pessoa['nome'])
// console.log(pessoa['sobrenome'])


const pessoa1 = new Object()
pessoa1.nome = 'Luis'
pessoa1.sobrenome = 'Melo'
pessoa1.idade = 39
pessoa1.falarNome = function () { console.log(`${this.nome} está falando`) }
pessoa1.getNascimento = function () {
    const dataAtual = new Date()
    return dataAtual.getFullYear() - this.idade
}

// console.log(pessoa1.getNascimento())


/* factory function */
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        // Função GET, transforma função em atributo.
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    }
}

const p1 = criaPessoa('Felipe', 'Cid')
// console.log(p1.nomeCompleto)


/* Constructor function */
function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome

}

const p2 = new Pessoa('João', 'Luis')
console.log(p2)