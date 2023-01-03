import User from '../models/Users'

class UserController {
  // Index
  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] })
      res.json(users)
    } catch (e) {
      res.json(null)
    }
  }
  // Create
  async create(req, res) {
    try {
      const novoUser = await User.create(req.body)
      const { id, nome, email } = novoUser
      return res.json({ id, nome, email })
    } catch (e) {
      return res.status(400).json(e.errors.map((err) => err.message))
    }
  }
  // Show
  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id)
      const { id, nome, email } = user
      return res.json({ id, nome, email })
    } catch (e) {
      return res.json(null)
    }
  }
  // Update
  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId)
      if (!user) return res.status(400).json({ erros: ['Invalid User'] })

      const newData = await user.update(req.body)
      const { id, nome, email } = newData
      return res.json({ id, nome, email })

    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      })
    }
  }
  // Deleate
  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId)
      if (!user) return res.status(400).json({ erros: ['Invalid User'] })

      await user.destroy()
      return res.json(null)

    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      })
    }
  }
}

export default new UserController()


/*
Index -> lista todos os usuários -> GET
store/create -> cria um novo usuário -> POST
delete -> apaga um user -> DELETE
show -> mostra um user -> GET
update -> atualiza um user -> PATCH ou PUT
*/