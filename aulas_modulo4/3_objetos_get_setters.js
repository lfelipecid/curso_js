// GET e SET função construtora
function Produtos(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco

    let estoquePrivado = estoque
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra chave
        configurable: true, // configuravel

        get: () => estoquePrivado, // GETTER

        set: vlr => {
            // return estoquePrivado = vlr
            if (typeof (vlr) != 'number') {
                return console.log('bad_value')
            } else {
                return estoquePrivado = vlr
            }

        }
    })
}

// const p1 = new Produtos('camisa', 150)
// p1.estoque = 50
// console.log(p1)
// console.log(p1.estoque)

// GET e SET função factory

function criarProduto(nome) {
    return {
        get nome() {
            return nome
        },
        set nome(vlr) {
            nome = vlr
        }
    }
}

const p2 = criarProduto('camisa')
console.log(p2.nome)
p2.nome = 'regata'
console.log(p2.nome)