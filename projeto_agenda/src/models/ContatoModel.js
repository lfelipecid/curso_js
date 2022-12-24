const mongoose = require('mongoose')
const validator = require('validator')

const ContatoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    sobrenome: { type: String, required: false, default: '' },
    email: { type: String, required: false, default: '' },
    telefone: { type: String, required: false, default: '' },
    createOn: { type: Date, default: Date.now },

})

const ContatoModel = mongoose.model('Contato', ContatoSchema)

class Contato {
    constructor(body) {
        this.body = body
        this.erros = []
        this.contato = null
    }

    async register() {
        this.checkFields()

        if (this.erros.length > 0) return

        this.contato = await ContatoModel.create(this.body)

    }

    checkFields() {

        this.cleanField()

        if (!this.body.nome) this.erros.push('Campo nome é obrigatório')

        if (this.body.email && !validator.isEmail(this.body.email)) this.erros.push('E-mail inválido')

        if (!this.body.telefone && !this.body.email) this.erros.push('Você precisa cadastar e-mail ou telefone.')

    }

    cleanField() {
        this.body = {
            nome: this.body.nome,
            sobrenome: this.body.sobrenome,
            email: this.body.email,
            telefone: this.body.telefone,
        }
    }

    async searchId(id) {
        if (typeof id !== 'string') return
        const user = await ContatoModel.findById(id)
        return user
    }

    async edit(id) {

        if (typeof id !== 'string') return
        this.checkFields()
        if (this.erros.length > 0) return

        this.contato = await ContatoModel.findByIdAndUpdate(id, this.body, { new: true })
    }

    async del(id) {
        if (typeof id !== 'string') return
        await ContatoModel.findByIdAndDelete(id)
    }

    async searchContatos() {
        const contatos = await ContatoModel.find().sort({ createOn: -1 })
        return contatos
    }
}

module.exports = Contato