function imc_user() {

    const form = document.querySelector('.form')
    const result = document.querySelector('.resultado')

    const pessoa = []
    



    function recebeEventForm(e) {
        const nome = form.querySelector('.nome')
        const sobreNome = form.querySelector('.sobreNome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')

        // Add to array
        pessoa.push({
            nome: nome.value,
            sobrenome: sobreNome.value,
            peso: peso.value,
            altura: altura.value
        })
        
        console.log(pessoa)
        result.innerHTML += `<p>${nome.value}</p>`

        e.preventDefault()
        
    }

    form.addEventListener('submit', recebeEventForm)
}

imc_user();