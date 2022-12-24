// Load Ajax
const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(obj.method, obj.url, true)
        xhr.send()

        xhr.addEventListener('load', e => {
            if (xhr.status >= 200 & xhr.status < 300) {
                resolve(xhr.responseText)
            } else {
                reject(xhr.statusText)
            }
        })

    })
}

// Catch click
document.addEventListener('click', e => {
    const el = e.target
    const tag = el.tagName.toLowerCase()

    if (tag === 'a') {
        e.preventDefault()
        loadPage(el)
    }
})

// Load Page
async function loadPage(el) {

    const href = el.getAttribute('href')
    const objectConfig = {
        method: 'GET',
        url: href,
    }

    try {
        const res = await request(objectConfig)
        injection(res)

    } catch (e) {
        console.log(e)
    }

}

// Injection
function injection(res) {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = res
}