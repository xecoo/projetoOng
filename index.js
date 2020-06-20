const app = require('express')();
const bodyParser = require('body-parser');
const knex = require('./config');
const Register = require('./controllers/Register');
const Login = require('./controllers/Login');
const Associado = require('./controllers/Associado');
const { where } = require('./config');
const porta = process.env.PORT || 8080;
const register = new Register();
const login = new Login();
const associado = new Associado();

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.redirect('/list_associado')
})

app.get('/associados', (req, res) => {
  res.render('associados.ejs')
})

app.get('/users', async (req, res) => {
  const verifica = await knex('users')
    .select('*')

  res.send(verifica)
})

app.get('/list_associado', async (req, res) => {
  const result = await knex('associado')
    .select('*')

  res.render('list_associados.ejs', {
    users: result
  })
})

app.get('/alterar_associado/:id', async (req, res) => {
  const id = req.params.id
  const result = await knex('associado')
    .select('*')
    .where({ id })
    .first()

  res.render('alterar_associado.ejs', {
    dados: result
  })
})

app.get('/remover_associado/:id', async (req, res) => {
  const id = req.params.id
  const result = await knex('associado')
    .where({ id })
    .del()

  res.redirect('/list_associado')
})



app.post('/register', register.registar)
app.post('/login', login.logar)
app.post('/associados', associado.create)
app.post('/alterar_associado', associado.update)

app.listen(porta);