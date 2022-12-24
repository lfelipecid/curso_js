const express = require('express')
const route = express.Router()
const homeController = require('./src/controller/homeController')
// const contatoController = require()

// Rotas Home
route.get('/', homeController.main)
route.post('/', homeController.catchPost)


// Export Routes
module.exports = route
