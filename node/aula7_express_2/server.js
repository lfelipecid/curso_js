import express from 'express'

const app = express()

// CRUD => CREATE, READ, UPDATED, DELETED
//         POST    GET   PUT      DELETED



// http://meusite.com/ <- GET -> Entrega pagina
// http://meusite.com/sobre :: ROUTE :: <- GET -> página sobre  

app.use(express.urlencoded({extended: true})) // Mostra dados do POST

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="cpf">
    <button>Enviar form</button>
    </form>
    `)
})

// Passar parametros
app.get('/testes/:id_user?', (req, res) => {
    console.log(req.params.id_user) // /profiles/3
    console.log(req.params.query) // /profiles/?chave1=valor&chave2=valor
    res.send(`Olá mundo: ${req.params.id_user}`)

})

app.post('/', (req, res) => {
    // res.send(req.body)
    res.send('REQ ENVIADA: ' + req.body.cpf) // retorna de acordo com name do formulario
})

app.get('/contato', (req, res) => {
    res.send('<h2>Obrigado por entrar em contato com a gente</h2>')
})

// Seleciona porta
app.listen(3000, () => {
    console.log('Iniciando servior http://127.0.0.1:3000')
    console.log('Servidor rodando na porta: 3000')
})
