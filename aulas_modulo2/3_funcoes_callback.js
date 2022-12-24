function rand(min = 1000, max = 3000) {
    return Number(Math.random() * (max - min) + min).toFixed()
}

function f1(callback) {
    setTimeout(function () {
        console.log('f1')
        if (callback) callback()
    }, rand())
}

function f2(callback) {
    setTimeout(function () {
        console.log('f2')
        if (callback) callback()
    }, rand())
}

function f3(callback) {
    setTimeout(function () {
        console.log('f3')
        if (callback) callback()
    }, rand())
}




// Funções callback para manter ordem

f1(function () {
    f2(function () {
        f3(function () {
            console.log('Olá Mundo')
        })
    })
})

//  OU 

function f1callback() {
    f2(f2callback)
}

function f2callback() {
    f3(f3callback)
}

function f3callback() {
    console.log('Olá Mundo')
}

f1(f1callback)
