import {SERVER_API} from './shared/apiconstant.js'

const REGISTER_API = 'users/register'
const LOGIN_API = 'pagina-login'

const botao = document.getElementById('botaoCadastro')
const botaoPGLogin = document.getElementById('botaoPGLogin')
const inputEmail = document.getElementById('email')
const inputNome = document.getElementById('nome')
const inputSenha = document.getElementById('senha')
const mensagemLogin = document.getElementById('mensagemLogin')
const containerMensagemLogin = document.getElementById('containerMensagemLogin')

botao.addEventListener('click', register);
botaoPGLogin.addEventListener('click', vaiPraTelaDeLogin);

function resetaMensagemLogin() {
    containerMensagemLogin.style.background = 'transparent'
    containerMensagemLogin.style.marginTop = '0rem'
    mensagemLogin.textContent = ''
}

function vaiPraTelaDeLogin() {
    window.open(SERVER_API + LOGIN_API)
}

function register() {
    const email = inputEmail.value;
    const senha = inputSenha.value;
    const nome = inputNome.value;
    resetaMensagemLogin()

    if (email && senha) {
        axios.post(SERVER_API + REGISTER_API, {login: email, password: senha,  nome: nome})
        .then(
            result => {
                document.documentElement.innerHTML = 'CADASTRO EFETUADO COM SUCESSO!'
                vaiPraTelaDeLogin()
                console.log("Cadastro feito com sucesso")
            }
        ).catch(
            error => {
                containerMensagemLogin.style.background = 'red'
                containerMensagemLogin.style.marginTop = '3rem'
                mensagemLogin.textContent = 'Email ja cadastrado. Tente novamente'
                console.log("Cadastro sem sucesso")
            }
        )
    }

    if (email == undefined || (senha == undefined) || (nome == undefined)){
        containerMensagemLogin.style.background = 'red'
        containerMensagemLogin.style.marginTop = '3rem'
        mensagemLogin.textContent = 'Campos vazios. Tente novamente'
        console.log("Cadastro sem sucesso")
    }
}