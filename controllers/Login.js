const knex = require('../config')

class Login {
  async logar(req, res) {
    let nome = req.body.nome
    let senha = req.body.senha
    const result = await knex('users')
      .select('*')
      .where({ nome })
      .first()
    
    if (result.nome == nome && result.senha == senha) {
      res.send(`Parabéns, você está logado no sistema e seu ID é ${result.id}!`)
    } else {
      res.send('Login ou senha inválidas!')
    }
  }
}

module.exports = Login