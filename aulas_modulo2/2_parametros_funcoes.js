
// Args
function funcaoArg(){
    let sum = 0
    for (let a of arguments) {
        sum += a
    }
    console.log(sum)
}

funcaoArg(1,2,3,4,5,6,7,8,9,10)

// Rest Operator
function conta(operador, acumulador, ...numeros) {
    for (let n of numeros) {
        if (operador == '+') acumulador += n
        if (operador == '-') acumulador -= n
        if (operador == '/') acumulador /= n
        if (operador == '*') acumulador *= n
    }

    console.log(acumulador)
}

conta('+', 0, 1,2,3,5,6,7,8,9,10)