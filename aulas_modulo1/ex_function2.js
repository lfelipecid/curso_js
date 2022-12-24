// Simple LOGIC
function max(x, y) {
    if (x > y) {
        return x
    } else {
        return y
    }
}

// clean
function max2(x, y) {
    if (x > y) return x
    return y
}

// Ternaria
function max3(x, y) {
    return x > y ? x : y
}

// Arrow + Ternaria
const max4 = (x, y) => x > y ? x : y
// console.log(max4(1, 10))

// Arrow Function
const ePaisagem = (largua, altura) => largua > altura
// console.log(ePaisagem(1920, 1080))


function fizzBuzz(num) {
    if (typeof num !== 'number') return false
    if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz'
    if (num % 3 === 0) return 'Fizz'
    if (num % 5 === 0) return 'Buzz'
    return ''
}


for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i))
}
