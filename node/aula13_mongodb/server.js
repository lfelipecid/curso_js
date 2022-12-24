require('dotenv').config()

const express = require('express')
const routes = require('./routes')
const path = require('path')
const myMiddleware = require('./src/middlewares/middlewares')
const mongoose = require('mongoose')


// Set Settings...
const app = express()
mongoose.connect(process.env.mongostring)
    .then(() => {
        app.emit('ready')
    })
    .catch(e => {
        console.log(e)
    })

// { useNewUrlParser: true, useUnifiedTopology: true}

app.use(express.urlencoded({ extended: true })) // Mostra dados do POST
app.use(express.static(path.resolve(__dirname, 'public')))

// Setting Views
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

// Set Middleware
app.set(myMiddleware)

// Setting Routes
app.use(routes)

// Run Server
app.on('ready', () => {
    app.listen(3000, () => {
        console.log(`Servidor iniciado em http://127.0.0.1:3000`)
    })
})





