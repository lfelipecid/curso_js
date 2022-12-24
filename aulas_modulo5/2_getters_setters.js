class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }

    get nomeCompleto() {
        return this.nome + ' ' + this.sobrenome
    }

    set nomeCompleto(nome) {
        nome = nome.split(' ')
        this.nome = nome.shift()
        this.sobrenome = nome.join(' ')
    }
}

const p1 = new Pessoa('Felipe', 'Cid')
p1.nomeCompleto = 'Luis Felipe de Melo Cid'
console.log(p1.nomeCompleto)
console.log(p1.nome)
console.log(p1.sobrenome)

