
const relogio = document.querySelector('.relogio')
let segundos = 0
let timer

// Atualiza Timer
function startTimer() {
    timer = setInterval(function(){
        segundos++
        relogio.innerHTML = getHourSecounds(segundos)
    }, 1000)
}

// Formata Timer
function getHourSecounds(sec) {
    const data = new Date(sec * 1000)
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    })
}


// Captura Click
document.addEventListener('click', function(e) {
    
    const el = e.target

    // Start BTN
    if (el.classList.contains('start')) {
        relogio.classList.remove('pausado')
        clearInterval(timer)
        startTimer()
    }

    // Pause BTN
    if (el.classList.contains('pause')) {
        relogio.classList.add('pausado')
        clearInterval(timer)
    }

    // Reset BTN
    if (el.classList.contains('reset')) {
        clearInterval(timer)
        relogio.innerHTML = '00:00:00'
        segundos = 0
    }
})

