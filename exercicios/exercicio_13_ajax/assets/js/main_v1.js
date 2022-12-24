// AJAX Code
const request = obj => {
    const xhr = new XMLHttpRequest()
    xhr.open(obj.method, obj.url, true)
    xhr.send()

    xhr.addEventListener('load', e => {
        if (xhr.status >= 200 && xhr.status < 300) {
            obj.sucess(xhr.responseText)
        } else {
            obj.error(xhr.statusText)
        }
    })
}

// Pega click
document.addEventListener('click', e => {
    const el = e.target
    const tag = el.tagName.toLowerCase()

    if (tag === 'a') {
        e.preventDefault()
        loadPage(el)
    }
})

function loadPage(el) {
    const href = el.getAttribute('href')
    console.log(href)
    request({
        method: 'GET',
        url: href,
        sucess(res){
            loadRes(res)
        },
        error(e){
            console.log(e)
        },
    })
}

function loadRes(res) {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = res
}