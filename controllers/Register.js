const knex = require('../config')

class Register {
  async registar(req, res) {
    let nome = req.body.nome
    let senha = req.body.senha
    const verifica = await knex('users')
      .select('*')
      .where({ nome })
      .first()
  
    if (verifica == undefined) {
      const result = await knex('users').insert({
        nome,
        senha
      })
      
      res.send(`Parabéns, você se registrou com o username ${nome}, senha ${senha} e o id é o ${result}!`)
    } else {
      res.send('Já existe um usuário com esse nome, favor insira outro!')
    }
  }
}

module.exports = Register