const Login = require('../models/LoginModel')

exports.index = (req, res) => {
    if(req.session.user) return res.redirect('/')
    return res.render('login')
}

exports.register = async (req, res) => {
    try {
        const login = new Login(req.body)
        await login.register()

        if (login.erros.length > 0) {
            req.flash('erros', login.erros)
            req.session.save(function () {
                return res.redirect('/login')
            })
            return
        }

        req.flash('success', 'Seu usuário foi criado com sucesso')
        req.session.save(function () {
            return res.redirect('/login')
        })

    } catch (e) {
        console.log(e)
        return res.render('404')
    }
}

exports.login = async (req, res) => {
    try {
        
        const login = new Login(req.body)
        await login.login()

        if(login.erros.length > 0) {
            req.flash('erros', login.erros)
            req.session.save(() => {
                return res.redirect('/login')
            })
            return
        }

        req.flash('success', 'Você está logado.')
        req.session.user = login.user
        req.session.save(() => {
            return res.redirect('/')
        })

    } catch(e) {
        console.log(e)
        return res.redirect('404')
    }
}

exports.logout = (req, res) => {
    req.session.destroy()
    res.redirect('/')
}