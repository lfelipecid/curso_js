class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome
        this.ligado = false
    }

    ligar() {
        if (this.ligado) {
            console.log(`${this.nome} já está ligado`)
            return
        }
        this.ligado = true
        console.log(`${this.nome} foi liagado`)
    }
    desligar() {
        if (!this.ligado) {
            console.log(`${this.nome} já está desligado.`)
            return
        }
        this.ligar = false
        console.log(`${this.nome} está sendo desativado.`)

    }
}


const cel = new DispositivoEletronico('Celular')
cel.ligar()
cel.desligar()


class SmartPhone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome) // Importa todas os atributos da class mãe
        this.cor = cor
        this.modelo = modelo
    }
}

const s1 = new SmartPhone('Galaxy', 'preto', 's20')
s1.ligar()

console.log(s1)


class Tablet extends DispositivoEletronico {
    constructor(nome, wifi) {
        super(nome)
        this.wifi = wifi
    }

    ligar() {
        console.log('Você alterou o metodo ligar.')
    }
}

const t1 = new Tablet('Samsing', 'sim')
t1.ligar()