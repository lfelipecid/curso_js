// função construtora, retorna obejtos
//função fabrica, constroi objetos

// Constutroa --> Class

function Pessoa(nome, sobrenome) {
    
    // Atributos Privados
    const ID = 123456
    const metodoInterno = e => {
        console.log('Sou um metodo interno, não consigo ser acessado por fora.')
    }
    
    // Atributos Públicos
    this.nome = nome
    this.sobrenome = sobrenome

    this.metodo = function () {
        console.log(this.nome + ': sou um método posso ser acessado por fora.')
    }
}

const p1 = new Pessoa('Felipe', 'Cid')
const p2 = new Pessoa('João', 'Luis')
console.log(p1)
console.log(p2)

p1.metodo()