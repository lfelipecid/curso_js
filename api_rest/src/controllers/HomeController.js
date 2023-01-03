import Aluno from '../models/Aluno'

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Felipe',
      sobrenome: 'Cid',
      email: 'felipecid@gmail.com',
      idade: 39,
      peso: 85,
      altura: 1.66,
    })
    res.json(novoAluno)
  }
}

export default new HomeController()
