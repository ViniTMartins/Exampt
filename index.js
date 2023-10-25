const express = require('express')
const app = express()
const porta = 4000
const {Users} = require('./DataBase/Models')
app.use(express.json())
app.use(express.static("FrontEnd"))

app.listen(porta, bootstrap)


function bootstrap() {
    console.log("Servidor iniciado em http://localhost:" + porta)
}

app.get('/exemplo', express.urlencoded({extended:false}), rotaExemplo)
app.post('/register-user', express.urlencoded({extended:false}), RegisterUser)
app.get('/get-users', express.urlencoded({extended:false}), GetUsers)


function rotaExemplo(req, res) {

    const mensagem = {};
    mensagem.valor = "rota desenvolvendo um JSON com atributo valor"
    console.log(mensagem)
    return res.status(200).json(mensagem)
}

async function RegisterUser(req, res) {

    const UserSalvo = await Users.create(req.body)
    return res.status(200).json(UserSalvo)
}

async function GetUsers(req, res) {

    return res.status(200).json(await Users.findAll())
}

const carregadorRotasAplicacao = require('./Routes/ApplicationRoutes')

carregadorRotasAplicacao.inicializarRotasDaAplicacao(app)
