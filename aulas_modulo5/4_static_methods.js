class ControleRemoto {
    constructor(tv) {
        this.tv = tv
        this.volume = 0
    }

    aumentarVolume() {
        this.volume += 2
    }

    diminuirVolume() {
        this.volume -= 2
    }

    static trocaPilha() {
        console.log('Vou troca')
    }
}

const c1 = new ControleRemoto('TV LG')

c1.aumentarVolume()
c1.aumentarVolume()
c1.aumentarVolume()

console.log(c1)

ControleRemoto.trocaPilha() // Metodo Statico
