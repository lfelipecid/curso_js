const paragrafos = document.querySelector('.paragrafos')
const ps = paragrafos.querySelectorAll('p')

const estilosBody = getComputedStyle(document.body)
const bgcolorbody = estilosBody.backgroundColor

for (let p of ps) {
    p.style.backgroundColor = bgcolorbody
    p.style.color = '#FFF'
}