fetch('pessoas.json')
    .then(res => res.json())
    .then(res => load_page(res))

function load_page(res) {
    const table = document.createElement('table')
    const resultado = document.querySelector('.resultado')

    // Parse over JSON file
    for (let p of res) {
        const tr = document.createElement('tr')

        // 1st Col
        let td1 = document.createElement('td')
        td1.innerHTML = p.nome
        tr.appendChild(td1) // Adiciona TD a TR (Coluna)

        // 2nd Col
        let td2 = document.createElement('td')
        td2.innerHTML = p.idade
        tr.appendChild(td2)
        
        // 3nd Col
        let td3 = document.createElement('td')
        td3.innerHTML = p.salario
        tr.appendChild(td3)

        // Adiciona TR a Tabale (Linha)
        table.appendChild(tr)
    }

    resultado.appendChild(table)

}