const knex = require('../config')

class Associado {
  async create(req, res) {
    let nome = req.body.nome
    let cpf = req.body.cpf
    let email = req.body.email
    let endereco = req.body.endereco
    let numero = req.body.numero
    let complemento = req.body.complemento
    let bairro = req.body.bairro
    let cidade = req.body.cidade
    let uf = req.body.estado
    const result = await knex('associado').insert({
      nome,
      cpf,
      email,
      endereco,
      numero,
      complemento,
      bairro,
      cidade,
      uf
    })
    res.redirect('/list_associado')
  }
  async update(req, res) {
    let id = req.body.id
    let nome = req.body.nome
    let cpf = req.body.cpf
    let email = req.body.email
    let endereco = req.body.endereco
    let numero = req.body.numero
    let complemento = req.body.complemento
    let bairro = req.body.bairro
    let cidade = req.body.cidade
    let uf = req.body.estado

    const result = await knex('associado')
      .where({ id })
      .update({
        nome,
        cpf,
        email,
        endereco,
        numero,
        complemento,
        bairro,
        cidade,
        uf
      })

    res.redirect('/list_associado')
  }
}

module.exports = Associado