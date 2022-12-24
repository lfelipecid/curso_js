const mongoose = require('mongoose')
const validator = require('validator')
const bcriptjs = require('bcryptjs')

const LoginSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    descricao: String
})

const LoginModel = mongoose.model('Login', LoginSchema)

class Login {

    constructor(body) {
        this.body = body
        this.erros = []
        this.user = null
    }

    async login() {

        this.check_fields()
        if (this.erros.length > 0) return

        // Query BD
        this.user = await LoginModel.findOne({ email: this.body.email })

        //  Caso Usuário não exista
        if (!this.user) {
            this.erros.push('Usuário ou Senha inválido!')
            // this.erros.push('Usuário inválido!')
            return
        }

        // Compara Senha e HASH do usuário
        if (!bcriptjs.compareSync(this.body.password, this.user.password)) {
            this.erros.push('Usuário ou Senha inválido!')
            // this.erros.push('Senha inválido!')
            this.user = null
            return
        }


    }

    async register() {
        this.check_fields()
        if (this.erros.length > 0) return

        await this.userExist()

        if (this.erros.length > 0) return

        // Use Bcrypt to HASH password
        const salt = bcriptjs.genSaltSync()
        this.body.password = bcriptjs.hashSync(this.body.password, salt)

        this.users = await LoginModel.create(this.body)

    }

    async userExist() {
        this.user = await LoginModel.findOne({ email: this.body.email })
        if (this.users) this.erros.push('Usuário já existe')
    }

    check_fields() {
        this.cleanField()
        // validação
        // O e-mail precisa ser valido
        if (!validator.isEmail(this.body.email)) this.erros.push('E-mail inválido')
        // A senha precisa ter entre 3 e 50
        if (this.body.password.length < 3 || this.body.password.length > 50) {
            this.erros.push('A senha precisa ter entre 3 e 50 caracters')
        }
    }

    cleanField() {

        for (const k in this.body) {
            if (typeof this.body[k] !== 'string') {
                this.body[k] = ''
            }
        }

        this.body = {
            email: this.body.email,
            password: this.body.password,
        }
    }
}

module.exports = Login