const Dog = require('./src/js/mod')

const d1 = new Dog('Aufreda')
d1.latir()


console.log(__filename)
console.log(__dirname)

const path = require('path')

console.log(path.resolve(__dirname, '..', '..'))