import express from 'express'

const app = express()

// CRUD => CREATE, READ, UPDATED, DELETED
//         POST    GET   PUT      DELETED



// http://meusite.com/ <- GET -> Entrega pagina
// http://meusite.com/sobre :: ROUTE :: <- GET -> página sobre  

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar form</button>
    </form>
    `)
})


app.post('/', (req, res) => {
    res.send('Recebi o formulario')
})

// Seleciona porta
app.listen(3000, () => {
    console.log('Iniciando servior http://127.0.0.1:3000')
    console.log('Servidor rodando na porta: 3000')
})
