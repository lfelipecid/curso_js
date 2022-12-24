const data = new Date('1983-09-01 11:26:47')
let diaSemana = data.getDay()
let diaSemanaString

switch (diaSemana) {
    case 0:
        diaSemanaString = 'Domingo'
        break
    case 1:
        diaSemanaString = 'Segunda'
        break
    case 2:
        diaSemanaString = 'Terça'
        break
    case 3:
        diaSemanaString = 'Quarta'
        break
    case 4:
        diaSemanaString = 'Quinta'
        break
    case 5:
        diaSemanaString = 'Sexta'
        break
    case 6:
        diaSemanaString = 'Sabado'
        break   
}

console.log(diaSemanaString)