const HomeModel = require('../models/HomeModel')

HomeModel.create({
    titulo: 'Um titulo de teste',
    descricao: 'Uma descrição teste'
})
    .then(d => console.log(d))
    .catch(e => console.log(e))

exports.main = (req, res) => {
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


