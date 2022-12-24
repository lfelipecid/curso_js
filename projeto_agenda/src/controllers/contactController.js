const Contato = require('../models/ContatoModel')

exports.index = (req, res) => {
    if (!req.session.user) res.redirect('/')
    return res.render('contact', { contato: {} })

}

exports.add = async (req, res) => {

    try {
        const contato = new Contato(req.body)
        await contato.register()

        // False
        if (contato.erros.length > 0) {
            req.flash('erros', contato.erros)
            req.session.save(() => res.redirect('/contact'))
            return
        }

        //  True
        req.flash('success', 'Seu contato foi cadastrado')
        req.session.save(() => res.redirect(`/contact/${contato.contato._id}`))
    } catch (e) {
        console.log(e)
        return res.redirect('404')
    }

}

exports.editIndex = async (req, res) => {

    const contato = new Contato()
    const user = await contato.searchId(req.params.id)

    if (!user) return res.redirect('/')

    res.render('contact', { contato: user })

}

exports.edit = async (req, res) => {
    try {

        const contato = new Contato(req.body)
        await contato.edit(req.params.id)

        // False
        if (contato.erros.length > 0) {
            req.flash('erros', contato.erros)
            req.session.save(() => res.redirect('/contact'))
            return
        }

        //  True
        req.flash('success', 'Seu contato atualizado com sucesso')
        req.session.save(() => res.redirect(`/contact/${contato.contato._id}`))

    } catch (e) {
        res.redirect('/')
        console.log(e)
    }

}

exports.del = async(req, res) => {
    try {
        const contato = new Contato()
        await contato.del(req.params.id)

        req.flash('erros', 'Contato apagado com sucesso.')
        req.session.save(() => res.redirect('back'))

    } catch(e) {
        res.redirect('404')
        console.log(e)
    }
}