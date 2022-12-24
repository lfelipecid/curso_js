const elements = [
    { tag: 'p', texto: 'Frase 1' },
    { tag: 'div', texto: 'Frase 2' },
    { tag: 'footer', texto: 'Frase 3' },
    { tag: 'section', texto: 'Frase 4' },
]

// Seleciono Container
const container = document.querySelector('.container')
// Crio elemento
const div = document.createElement('div')


for (let i = 0; i < elements.length; i++) { 
    // Destruturação    
    let {tag, texto } = elements[i]
    // Criação de elemetnos
    let el = document.createElement(tag)
    // Insere text
    el.innerText = texto
    div.appendChild(el)
}

container.appendChild(div)