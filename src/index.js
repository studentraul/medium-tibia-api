//Importa a configuração criada e cria uma intancia do Express
const app = require('./config/express.config')()

//Define uma porta padrão, caso não tenha alguma passada por variáveis de ambiente
const port = process.env.PORT || 8080

//Coloca o servidor online, passando a porta e uma função de callback, que apenas loga e informa que o sv ta on
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
