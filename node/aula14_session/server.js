require('dotenv').config()
const express = require('express')
const routes = require('./routes')
const path = require('path')
const myMiddleware = require('./src/middlewares/middlewares')
const mongoose = require('mongoose')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const flash = require('connect-flash')

// Set Settings...
const app = express()
mongoose.connect(process.env.mongostring)
    .then(() => {
        app.emit('ready')
    })
    .catch(e => {
        console.log(e)
    })
app.use(express.urlencoded({ extended: true })) // Mostra dados do POST
app.use(express.static(path.resolve(__dirname, 'public')))

// Setting Sessions
const sessionOptions = session({
    secret: '123asd',
    store: MongoStore.create({mongoUrl: process.env.mongostring}),
    resave: false,
    saveUninitialized: false,
    cookie: {
//  milesegundos, seg, min, horas, dias
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
})
app.use(sessionOptions) // Usar Session
app.use(flash())

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





