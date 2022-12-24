// defineProperty - defineProperties
function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco

    Object.defineProperty(this, 'estoque', {
        value: estoque, // Valor da chave
        enumerable: true, // Mostra a chave
        writable: false, // alterar valor
        configurable: false, // configura chave
    })
}

const p1 = new Produto('Camisa', '1500', 500)
this.estoque = 1000
console.log(p1)