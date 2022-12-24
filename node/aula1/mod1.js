const nome = 'Felipe'
const sobrenome = 'Cid'

const falaNome = () => console.log(nome + ' ' + sobrenome)

class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
    }

}



module.exports.nome = nome // Exportação

exports.nome = nome
exports.sobrenome = sobrenome
exports.falaNome = falaNome // Exportação
this.qualquercoisa = 'Valor que eu quero' // Exportação

exports.Pessoa = Pessoa
