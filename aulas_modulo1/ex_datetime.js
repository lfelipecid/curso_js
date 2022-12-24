const tresHoras = 60 * 60 * 3 * 1000 // Calculo de Hora
const umDia = 60 * 60 * 24 * 1000 // Calculo de Dia

const dt_now = new Date()
// console.log(dt_now.toString()) // Retorna Data

const data = new Date(0 + tresHoras + umDia)
// console.log(data)

// const setData = new Date(2017, 4, 7, 14, 30, 50)
// const setData2 = new Date('2017-4-7 14:30:50')
// console.log(setData2.toString())
// console.log(`Dia: ${setData2.getDate()}`)
// console.log(`Mês: ${setData2.getMonth()}`) // Começa do Zero
// console.log(`Ano: ${setData2.getFullYear()}`)
// console.log(`Hora: ${setData2.getHours()}`)
// console.log(`Minuto: ${setData2.getMinutes()}`)
// console.log(`Segundo: ${setData2.getSeconds()}`)
// console.log(`ms: ${setData2.getMilliseconds()}`)
// console.log(`Dia da Semana: ${setData2.getDay()}`) // 0: Domingo, 6: Sábado
// console.log(Date.now()) // Retorna Timestamp atual

function formatData (data) {

}

const dataBrasil = formatData(dt_now)
console.log(dataBrasil)
  