function random(min, max) {
    const r = Math.random() * (max - min) + min
    return Math.round(r)
}

const min =  1
const max = 1000
let rand = random(min,max)

while (rand != 10) {
    rand = random(min, max)
    console.log(rand)
}  

