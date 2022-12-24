exports.paginaInicial = (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type=text name=nameCliente><br>
    e-mail: <input type=text name=email><br>
    <button>Enviar</button>
    </form>
    `)
}

exports.catchPost = (req, res) => {
    const nome = req.body.nameCliente
    const email = req.body.email
    res.send('Sou nova rota do post' + nome + email)
}