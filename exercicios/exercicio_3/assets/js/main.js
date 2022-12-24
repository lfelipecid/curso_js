// Capturar form
const form = document.querySelector('#imc_form')

// Captura botão enviar
form.addEventListener('submit', function (e) {
    e.preventDefault()

    const inputPeso = Number(form.querySelector('#peso').value)
    const inputAltura = Number(form.querySelector('#altura').value)

    // Valida os dados
    if (!inputPeso) {
        setResultado('Peso Inválido')
        return
    }
    
    if (!inputAltura) {
        setResultado('Altura Inválida')
        return
    }

    // Gera resultado
    const imc = getImc(inputPeso, inputAltura)
    const resImc = nivelImc(imc)
    setResultado(resImc[0], resImc[1])
    // setResultado(nivelImc(imc))

})

// Calcula IMC
function getImc(peso, altura) {
    const imc = peso / altura ** 2
    return imc.toFixed(2)
}

// Calc Nivel IMC
function nivelImc(imc) {
    if (imc <= 18.5) return ['Abaixo do peso', 'yellow']
    if (imc >= 18.6 && imc <= 24.9) return ['Peso Normal', 'green']
    if (imc >= 25 && imc <= 29.9) return ['Sobrepeso', 'yellow']
    if (imc >= 30 && imc <= 34.9) return ['Obesidade grau 1', 'lightRed']
    if (imc >= 35 && imc <= 39.9) return ['Obesidade grau 2', 'red']
    if (imc >= 40) return ['Obesidade grau 3', 'darkRed']
}

// Cria resultado
function setResultado(imc, imcColor) {
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = ''
    const p = criaP()

    //
    p.classList.add(imcColor)
    p.innerHTML = imc
    resultado.appendChild(p)

}

//criar paragrafos
function criaP() {
    const p = document.createElement('p')
    return p
}