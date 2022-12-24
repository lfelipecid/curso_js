const express = require('express')
const route = express.Router()
const homeController = require('./src/controller/homeController')
const middleWare = require('./src/middlewares/middlewares')
// const contatoController = require()


// function meuMiddleWare(req, res, next) {
//     console.log()
//     console.log('Passei no seu middleware')
//     console.log()
//     next()
// }

// Rotas Home
route.get('/', middleWare.global, homeController.main)
route.post('/', homeController.catchPost)


// Export Routes
module.exports = route
