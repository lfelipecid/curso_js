const express = require('express')
const route = express.Router()
const homeController = require('./src/controllers/homeController')
const loginController = require('./src/controllers/loginController')
const contactController = require('./src/controllers/contactController')

// Rotas Home
route.get('/', homeController.index)

// Rotas de Login & Logout
route.get('/login', loginController.index)
route.post('/login/register', loginController.register)
route.post('/login/login', loginController.login)
route.get('/login/logout', loginController.logout)

// Rotas AddContact
route.get('/contact', contactController.index)
route.post('/contact/add', contactController.add)
route.get('/contact/:id', contactController.editIndex)
route.post('/contact/edit/:id', contactController.edit)
route.get('/contact/del/:id', contactController.del)

// Export Routes
module.exports = route
