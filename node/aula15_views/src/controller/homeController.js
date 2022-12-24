const HomeModel = require('../models/HomeModel')

exports.main = (req, res) => {    
    res.render('index', {
        tit: 'Este será o TITULO da página',
        numeros: [1,2,3,4,5,6,7]
    })
}

exports.catchPost = (req, res) => {
    const name = req.body.name
    const email = req.body.email

    res.send(`
    nome: ${name}<br>
    email: ${email}<br>
    `)
}


