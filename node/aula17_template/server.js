require('dotenv').config() // Variaveis de ambiente
const express = require('express')
const routes = require('./routes')
const path = require('path')
const {global , checkCsrfError, csrfMiddleWare} = require('./src/middlewares/middlewares')
const mongoose = require('mongoose')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const flash = require('connect-flash')
const helmet = require('helmet')
const csrf = require('csurf')

// Set Settings...
const app = express()
mongoose.set('strictQuery', false)
mongoose.connect(process.env.mongostring, )
    .then(() => {
        app.emit('ready')
    })
    .catch(e => {
        console.log(e)
    })
app.use(express.urlencoded({ extended: true })) // Mostra dados do POST
app.use(express.json()) // Retorna arquivos JSON
app.use(express.static(path.resolve(__dirname, 'public'))) // Retorna Arquvis staticos 

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
app.use(flash()) // Flash Sucess / Error / Warning
app.use(helmet()) // Utiliza HELMET

// Setting Views
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

// Setting CSRF
app.use(csrf())

// Set Middleware
app.use(global)
app.use(checkCsrfError)
app.use(csrfMiddleWare)

// Setting Routes
app.use(routes)

// Run Server
app.on('ready', () => {
    app.listen(3000, () => {
        console.log(`Servidor iniciado em http://127.0.0.1:3000`)
    })
})





