class HomeController {
  async index(req, res) {
    res.json('INDEX')
  }
}

export default new HomeController()
