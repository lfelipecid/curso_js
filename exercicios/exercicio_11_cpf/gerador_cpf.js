// 705.484.450-52 070.987.720-03

/*
7x 0x 5x 4x 8x 4x 4x 5x 0x
10 9  8  7  6  5  4  3  2
70 0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (primeiro digito)
Se for maior que 9 = 0

7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10 9  8  7  6  5  4  3  2
77 0  45 32 56 24 20 20 0 10


*/

// Create randm new array
const rand9 = Array(9).fill().map(() => Math.round(Math.random() * 9))

const newList = [1, 0, 3, 8, 7, 4, 0, 3, 7]
// console.log('LISTA 9:', newList)


const getFirstDigit = arrayList => {

    let mult9 = 10
    let mult10 = 11

    const calcFirstDigit = arrayList.reduce((a, v) => {
        // Math
        a += v * mult9
        // Reduce
        mult9--
        return a
    }, 0)

    console.log(calcFirstDigit)


    const lastDigit = (ld) => {
        ld = 11 - (ld % 11)
        return arrayList.push(ld > 9 ? 0 : ld)
    }

    // Array with 10 digit
    lastDigit(calcFirstDigit)


    const calcLastDigit = arrayList.reduce((a, v) => {
        a += v * mult10
        mult10--
        return a
    }, 0)

    lastDigit(calcLastDigit)


    return arrayList
}

console.log(getFirstDigit(newList))









