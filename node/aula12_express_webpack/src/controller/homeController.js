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


