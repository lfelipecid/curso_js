function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.nomeCompleto = () => `${this.nome} ${this.sobrenome}`
}

const p1 = new Pessoa('Luiz', 'O.')
const p2 = new Pessoa('Felipe', 'C.')

console.dir(p1)
console.dir(p2)
