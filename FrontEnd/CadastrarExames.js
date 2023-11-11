import {SERVER_API} from './shared/apiconstant.js'
const inputExame = document.getElementById('InputExame')
const inputTpExame = document.getElementById('InputTipo')
const btnSubmit = document.getElementById('btnSubmit')

btnSubmit.addEventListener('click', registerExames);

function vaiPraTelaDeExames() {
    window.open(SERVER_API + 'exames')
}

function registerExames() {
    const RGEXAMES_API = "examesPaciente/cadastrar"
    
    const Exame = inputExame.value;
    const TpExame = inputTpExame.value;

    if (Exame && TpExame) {
        axios.post(SERVER_API + RGEXAMES_API, {tipo: TpExame, Exame: Exame})
        .then(
            result => {
                document.documentElement.innerHTML = 'CADASTRO EFETUADO COM SUCESSO!'
                vaiPraTelaDeExames()
                console.log("Cadastro feito com sucesso")
            }
        ).catch(
            error => {
                console.log("Cadastro sem sucesso")
            }
        )
    }
}