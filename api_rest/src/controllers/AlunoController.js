import Aluno from '../models/Aluno'
import Foto from '../models/Fotos'

class AlunoController {
    // Index
    async index(req, res) {
        const alunos = await Aluno.findAll({
            attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
            order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
            include: {
                model: Foto,
                attributes: ['filename', 'url']
            }
        })
        res.json(alunos)

    }
    // Create
    async create(req, res) {
        try {
            const novoAluno = await Aluno.create(req.body)
            return res.json(novoAluno)
        } catch (e) {
            return res.status(400).json(e.errors.map((err) => err.message))
        }
    }
    // Updated
    async updated(req, res) {
        try {
            if(!req.params.id) return res.status(400).json({ erros: ['Missing ID']})
            const student = await Aluno.findByPk(req.params.id)
            if(!student) return res.status(400).json({ erros: ['Invalid Student']})

            const updateStudent = await student.update(req.body)
            return res.json(updateStudent)
        } catch (e) {
            return res.status(400).json(e.errors.map((err) => err.message))
        }
    }
    // Show
    async show(req, res) {
        try {
            if(!req.params.id) return res.status(400).json({ erros: ['Missing ID']})
            const aluno = await Aluno.findByPk(req.params.id, {
                attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
                order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
                include: {
                    model: Foto,
                    attributes: ['filename', 'url']
                }
            })
            if(!aluno) return res.status(400).json({ erros: ['Invalid Student']})
            return res.json(aluno)
        } catch (e) {
            return res.status(400).json(e.errors.map((err) => err.message))
        }
    }
    // Delete
    async delete(req, res) {
        try {
            if(!req.params.id) return res.status(400).json({ erros: ['Missing ID']})
            const aluno = await Aluno.findByPk(req.params.id)
            if(!aluno) return res.status(400).json({ erros: ['Invalid Student']})

            await aluno.destroy()
            return res.json('Student DELETED.')
        } catch (e) {
            return res.status(400).json(e.errors.map((err) => err.message))
        }
    }
    

}


export default new AlunoController()
