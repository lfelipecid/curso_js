const Contato = require('../models/ContatoModel')

exports.index = async (req, res) => {
    try {
        const c1 = new Contato()
        const contatos = await c1.searchContatos()
        res.render('index', { contatos })
    } catch (e) {
        res.redirect('/')
        console.log(e)
    }
}




