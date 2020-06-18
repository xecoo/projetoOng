const app = require('express')()
const bodyParser = require('body-parser')
const knex = require('./config')
const Register = require('./controllers/Register')
const Login = require('./controllers/Login')

const register = new Register()
const login = new Login()

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index.ejs')
})
app.post('/register', register.registar)
app.post('/login', login.logar)
app.get('/users', async (req, res) => {
  const verifica = await knex('users')
    .select('*')

  res.send(verifica)
})

app.listen(3333)