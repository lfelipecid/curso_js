import app from './app'

const port = 3001
app.listen(port, () => {
  console.log()
  console.log(`Escutando a porta ${port}`)
  console.log(`CTRL + CLIQUE: http://localhost:${port}`)
})
