import {SERVER_API} from './shared/apiconstant.js'

const exames_ROUTE = 'exames'

const botao = document.getElementById('btnExames')

botao.addEventListener('click', vaiPraTelaExames);

function vaiPraTelaExames() {
    console.log("me clickou")
    window.open(SERVER_API + exames_ROUTE)
}
