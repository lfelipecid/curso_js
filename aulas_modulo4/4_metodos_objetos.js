// Mesmo objeto
const produto = {
    nome: 'Caneca',
    preco: 1.8
}
const outraCoisa = produto

// console.log(outraCoisa)
// console.log(produto)


// Realizando cópia de objeto
const novoObjeto = { ...produto }
novoObjeto.nome = 'Copo'

// console.log(produto)
// console.log(novoObjeto)

console.log(Object.keys(produto)) // Parse over objects keys
console.log(Object.values(produto)) // Parse over object values
console.log(Object.entries(produto)) // Convert Objetct to Array
Object.freeze(produto) // Bloqueia alteração no objeto


Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false,
}) 
console.log(Object.getOwnPropertyDescriptor(produto, 'nome')) // Retorna GETTER e SETTER


