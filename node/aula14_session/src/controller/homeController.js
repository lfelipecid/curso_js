const HomeModel = require('../models/HomeModel')

exports.main = (req, res) => {
    // req.session.usuario = { nome: "Felipe Cid", logado: "True" }
    // console.log(req.session.usuario)

    // req.flash('info', 'Info!')
    // req.flash('error', 'Error!')
    // req.flash('sucess', 'Sucess')
    console.log(req.flash('info'), req.flash('error'), req.flash('sucess'))
    
    res.render('index')
}

exports.catchPost = (req, res) => {
    const name = req.body.name
    const email = req.body.email

    res.send(`
    nome: ${name}<br>
    email: ${email}<br>
    `)
}


