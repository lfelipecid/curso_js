let data = new Date()

const container = document.querySelector('.container')
const newH1 = document.createElement('h1')
newH1.innerHTML = convertDate(data) 
container.append(newH1)

function convertDate(data) {
    let day = data.getDate()
    let month = convertMonth(data)
    let year = data.getFullYear()
    let dayOfWeek = convertDayWeek(data)
    let hour = data.getHours()
    let minute = data.getMinutes()

    let stringDate = `${dayOfWeek}, ${day} de ${month} de ${year} às ${hour}:${minute}`
    return stringDate
}

function convertDayWeek(data) {
    let dayOfWeek = data.getDay()
    switch (dayOfWeek) {
        case 0: return 'Domingo' 
        case 1: return 'segunda'
        case 2: return 'terça'
        case 3: return 'quarta'
        case 4: return 'quinta'
        case 5: return 'sexta'
        case 6: return 'sábado'
    }
}

function convertMonth(data) {
    let monthOfYear = data.getMonth()
    switch(monthOfYear) {
        case 0:  return 'Janeiro'
        case 1:  return 'Fevereiro'
        case 2:  return 'Março' 
        case 3:  return 'Abril'
        case 4:  return 'Maio'
        case 5:  return 'Junho'
        case 6:  return 'Julho'
        case 7:  return 'Agosto'
        case 8:  return 'Setembro'
        case 9:  return 'Outubro'
        case 10:  return 'Novembro'
        case 11:  return 'Dezembro'
    }
}

 


