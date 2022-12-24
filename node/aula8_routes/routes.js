const express = require('express')
const route = express.Router()
const homeController = require('./controllers/homeControllerer')
const contatoController = require('./controllers/contatoController')

// Rotas HOME
route.get('/', homeController.paginaInicial)
route.post('/',homeController.catchPost )

// Rotas CONTATO
route.get('/contato', contatoController.main)

module.exports = route