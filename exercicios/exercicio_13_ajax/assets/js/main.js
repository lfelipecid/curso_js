document.addEventListener('click', e => {
    const el = e.target
    const tag = el.tagName.toLowerCase()
    
    if (tag === 'a') {
        e.preventDefault() // Previne click
        loadPage(el)
    }
})

async function loadPage(el) {
    const href = el.getAttribute('href')
    
    const resp = await fetch(href)
    if(resp.status !== 200) throw new Error('ERROR 404')
    const html = await resp.text()
    injection(html)

    // fetch(href)
    //     .then(res => res.text())
    //     .then(res => injection(res))
    //     .catch(e => console.log(e))
}

function injection(res) {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = res
}
