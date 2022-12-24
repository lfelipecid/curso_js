const express = require('express')
const routes = require('./routes')
const path = require('path')
const myMiddleware = require('./src/middlewares/middlewares')

// Setting Express
const app = express()
app.use(express.urlencoded({extended: true})) // Mostra dados do POST
app.use(express.static(path.resolve(__dirname, 'public')))

// Setting Views
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

// Set Middleware
app.set(myMiddleware)

// Setting Routes
app.use(routes)

// Run Server
app.listen(3000, () => {
    console.log(`Servidor iniciado em http://127.0.0.1:3000`)
})


// mongodb+srv://felipecid:<password>@cluster0.n3hgr.mongodb.net/?retryWrites=true&w=majority



