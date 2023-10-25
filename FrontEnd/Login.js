import {SERVER_API} from './shared/apiconstant.js'

const LOGIN_API = 'users/login'
const PAGINA_INICIAL_ROUTE = 'pagina-inicial'

const botao = document.getElementById('botaoLogin')
const inputEmail = document.getElementById('email')
const inputSenha = document.getElementById('senha')
const mensagemLogin = document.getElementById('mensagemLogin')
const containerMensagemLogin = document.getElementById('containerMensagemLogin')

botao.addEventListener('click', login);

function resetaMensagemLogin() {
    containerMensagemLogin.style.background = 'transparent'
    containerMensagemLogin.style.marginTop = '0rem'
    mensagemLogin.textContent = ''
}

function vaiPraTelaInicial() {
    window.open(SERVER_API + PAGINA_INICIAL_ROUTE)
}

function login() {
    const email = inputEmail.value;
    const senha = inputSenha.value;
    resetaMensagemLogin()

    if (email && senha) {
        axios.post(SERVER_API + LOGIN_API, {login: email, password: senha})
        .then(
            result => {
                // HTML INTEIRO DA NOSSA PAGINA
                document.documentElement.innerHTML = 'LOGIN EFETUADO COM SUCESSO!'
                vaiPraTelaInicial()
                console.log("Login feito com sucesso")
            }
        ).catch(
            error => {
                containerMensagemLogin.style.background = 'red'
                containerMensagemLogin.style.marginTop = '3rem'
                mensagemLogin.textContent = 'Acesso inválido. Tente novamente'
                console.log("Login sem sucesso")
            }
        )
    }
}