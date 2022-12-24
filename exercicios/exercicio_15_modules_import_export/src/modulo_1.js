export const nome = 'Luis'
export const sobrenome = 'Cid'
export const idade = 30

export function soma(x, y) {
    return x + y
}

export default class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }

    fala() {
        return `${this.nome} está falando seu sobrenome é ${this.sobrenome}`
    }
}


