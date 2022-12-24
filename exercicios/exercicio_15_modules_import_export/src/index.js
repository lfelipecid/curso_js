import Pessoa, {nome, sobrenome, idade, soma} from "./modulo_1";

// console.log(nome, sobrenome, idade)
// console.log(soma(5, 5))

const p1 = new Pessoa(nome, sobrenome)
console.log(p1.fala())
console.log(p1)