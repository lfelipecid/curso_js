function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,
        altura: a,
        peso: p,

        //Factory Function dentro do objeto, THIS usado para acesar atributo dentro do objeto.
        calcIMC: function () { return Number(this.peso / (this.altura ** 2)).toFixed(2) },
        // Getter transforma FUNÇÃO em Atributo
        get imc() { return Number(this.peso / (this.altura ** 2)).toFixed(2) },
        // Getter
        get nomeCompleto() { return `${this.nome} ${this.sobrenome}` },
        // Setter
        set nomeCompleto(valor) { 
            valor = valor.split(' ')
            this.nome = valor.shift() // Retorna primeiro valor do array e remove ele.
            this.sobrenome = valor.join(' ') // Une dois arrays
         }
    }
}

const p1 = criaPessoa('Felipe', 'Cid', 1.68, 70)
// console.log(p1.imc)
p1.nomeCompleto = 'João Luis Cid'
// console.log(p1.nomeCompleto)get nomeCompleto() { return `${this.nome} ${this.sobrenome}` },
console.log(p1.nomeCompleto)
