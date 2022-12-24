const express = require('express')
const routes = require('./routes')


const app = express()

app.use(express.urlencoded({extended: true})) // Mostra dados do POST
app.use(routes) // SET ALL ROUTES

// Seleciona porta
app.listen(3000, () => {
    console.log('Iniciando servior http://127.0.0.1:3000')
    console.log('Servidor rodando na porta: 3000')
})
