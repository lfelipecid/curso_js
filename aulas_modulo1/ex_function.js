function saudacao() {
    console.log('Olá Felipe Cid')
}

function saudacao_nome(nome) {
    console.log(`Olá ${nome}, tudo bem?`)
}

function soma(x, y){
    return x + y
}

// Arrow Function
const raiz = n => Math.sqrt(n);

saudacao()
saudacao_nome('Cid')
console.log(soma(2,2))
console.log(raiz(9))
